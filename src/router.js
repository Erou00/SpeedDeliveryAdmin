import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/defaultLayout/DefaultLayout";
import Dashboard from './views/adminstration/dashboard/Dashboard'
import Users from './views/adminstration/users/Users'
import Login from "./views/public/login/Login";
import GuestLayout from "./layouts/guestLayout/GuestLayout";
import Welcome from "./views/public/welcome/Welcome";
import Categories from "./views/adminstration/settings/categories/Categories";
import Cities from "./views/adminstration/settings/cities/Cities";
import CategorieForm from "./views/adminstration/settings/categories/CategorieForm";
import CityForm from "./views/adminstration/settings/cities/CityForm";
import Assaurance from "./views/adminstration/settings/assaurance/Assaurance";
import AssuranceForm from "./views/adminstration/settings/assaurance/AssuranceForm";
import Mark from "./views/adminstration/settings/mark/Mark";
import MarkForm from "./views/adminstration/settings/mark/MarkForm";
import Model from "./views/adminstration/settings/model/Model";
import ModelForm from "./views/adminstration/settings/model/ModelForm";
import Vehicles from "./views/adminstration/vehicles/Vehicles";
import VehicleForm from "./views/adminstration/vehicles/VehicleForm";
import Livreurs from "./views/adminstration/livreurs/Livreurs";
import LivreurFrom from "./views/adminstration/livreurs/LivreurForm";
import LivreurConsultation from "./views/adminstration/livreurs/LivreurConsultation";


import Packs from "./views/adminstration/packs/Packs"
import PackConsultation from "./views/adminstration/packs/PackConsultation";


import Commandes from "./views/adminstration/commandes/Commandes";
import CommandeConsultation from "./views/adminstration/commandes/CommandeConsultation";
import UserConsultation from "./views/adminstration/users/UserConsultation";




const router = createBrowserRouter([

    {
        path:"dashboard",
        element:<DefaultLayout/>,
        children:[
            {
                path: '',
                element: <Dashboard/>
            },
            
            {
              path: 'users',
              element: <Users/>
            },
            {
              path: 'users/:id/consultation',
              element: <UserConsultation/>
            },

            {
              path: 'vehicules',
              element: <Vehicles/>
            },
            {
              path: 'vehicules/create',
              element: <VehicleForm/>
            },
            {
              path: 'vehicules/:id',
              element: <VehicleForm/>
            },
            {
              path: 'livreurs',
              element: <Livreurs/>
            },
            {
              path: 'livreurs/create',
              element: <LivreurFrom/>
            },
            {
              path: 'livreurs/:id/consultation',
              element: <LivreurConsultation/>
            },


            {
              path: 'colis',
              element: <Packs/>
            },
            {
              path: 'colis/:id/consultation',
              element: <PackConsultation/>
            },

            {
              path: 'commandes',
              element: <Commandes/>
            },
            {
              path: 'commandes/:id/consultation',
              element: <CommandeConsultation/>
            },


            {
              path: 'parametrage',
              children:[
                {
                  path: 'categories',
                  element: <Categories/>
                },
                {
                  path: 'categories/create',
                  element: <CategorieForm/>
                },
                {
                  path: 'categories/:id',
                  element: <CategorieForm/>
                },
                {
                  path: 'villes',
                  element: <Cities/>
                },
                {
                  path: 'villes/create',
                  element: <CityForm/>
                },
                {
                  path: 'villes/:id',
                  element: <CityForm/>
                },
                {
                  path: 'assurances',
                  element: <Assaurance/>
                },
                {
                  path: 'assurances/create',
                  element: <AssuranceForm/>
                },
                {
                  path: 'assurances/:id',
                  element: <AssuranceForm/>
                },
                {
                  path: 'marques',
                  element: <Mark/>
                },
                {
                  path: 'marques/create',
                  element: <MarkForm/>
                },
                {
                  path: 'marques/:id',
                  element: <MarkForm/>
                },
                {
                  path: 'modeles',
                  element: <Model/>
                },
                {
                  path: 'modeles/create',
                  element: <ModelForm/>
                },
                {
                  path: 'modeles/:id',
                  element: <ModelForm/>
                },
                
              ]
            },

            // {
            //   path: '/users/new',
            //   element: <UserForm key='UserCreateForm' />
            // },
            // {
            //   path: '/users/:id',
            //   element: <UserForm key='UserUpdateForm' />
            // },
      
          ]
    
    },

    {
      path:"/",
      element:<GuestLayout/>,
      children:[
        {
          path:"",
          element:<Welcome/>
        },
        {
          path:"/login",
          element:<Login/>
        },
      
      ]
      
      }
    
])

export default router