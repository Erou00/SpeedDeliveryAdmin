import React from 'react'
import './packCard.css'
const PackCard = () => {
  return (
    <div class="col-md-4">
                <div class="card-sl">
                    <div class="card-image">
                        <img
                            src="https://images.pexels.com/photos/6038218/pexels-photo-6038218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </div>

                    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                    <div className='content'>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-text">
                        Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                    </div>
                    <div class="card-text">
                        $67,400
                    </div>

                    </div>
                    <a href="#" class="card-button"> Consulter</a>

                </div>
    </div>
  )
}

export default PackCard
