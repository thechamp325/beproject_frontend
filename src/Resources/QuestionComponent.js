import React, { Component } from 'react'

export default class QuestionComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = ( {
             posts : []
        })
    }


    render() {

        const {posts} = this.state 


        return (
            <div>


                            <div><center><div className = 'form-row , fieldset float-none'>{posts.title}</div> {posts.title}    </center> </div>

{/* 

                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table> */}
                
            </div>
        )
    }
}
