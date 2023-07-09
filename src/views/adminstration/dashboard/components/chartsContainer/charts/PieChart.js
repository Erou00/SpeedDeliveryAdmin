import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['LIVREE', 'RETOUR','EN TRAIN DE LIVREE','EN COURS','NOUVELLE'],
    datasets: [
      {
        label: '% ',
        data: [20,20,20,20,20],
        backgroundColor: [
          '#15ca20',
          '#fd3550',
          '#ffc107',
          '#2642a4',
          '#71747f',

        ],
        borderColor: [
          '#fff',
          '#fff',
          '#fff',
          '#fff',
          '#fff',
        ],
        
        borderWidth: 1,
      },
    ],
  };
const PieChart = () => {
  return (
    <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold">Revenue Sources</h6>
                    
                </div>
                
                <div className="card-body">
                    <div className="chart-area">
                       <Pie data={data} options={{plugins:{
                        title: {
                          display: true,
                          text: 'Chart.js Line Chart',
                        },
                       }}}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default PieChart
