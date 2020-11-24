import React from 'react';
import './TripPack.css';

function TripPackage(){
    return(
        <div>
                <h2>Trip Packages</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>no.</th>
                            <th>Trip Package</th>
                            <th>Price</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dandeli</td>
                            <td>1800/-</td>
                            <td>2days</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Goa</td>
                            <td>15000/-</td>
                            <td>5days</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ladakh</td>
                            <td>25000/-</td>
                            <td>7days</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Kerala</td>
                            <td>15000/-</td>
                            <td>5days</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>North East</td>
                            <td>20000/-</td>
                            <td>10days</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Manali</td>
                            <td>10000/-</td>
                            <td>6days</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default TripPackage;