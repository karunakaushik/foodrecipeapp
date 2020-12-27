import React from 'react';
import style from './src/css/fooddatabase.module.css'
// 
const FoodDatabase = ({title,image, digest}) => {

    return(
        <div className={style.database}>
           {/* <table className={style.fooddataBaseTable}>
                <tr>
                    <th className={style.image}>Image</th>
                    <th className={style.food}>Food</th>
                    <th className={style.quantity}>Quantity</th>
                    <th className={style.unit}>Unit</th>
                    <th className={style.healthLables}>Healthy</th>
                </tr>
                <tr>
                    <td className={style.image}>
                    <img className={style.image} src={image} alt="" style={{width:"80%"}} />
                    </td>
                    <td className={style.food}><h3>{title}</h3></td>
                    <td className={style.quantity}><p> 100 </p></td>
                    <td className={style.unit}><p> g </p></td>
                    <td className={style.healthLables}>
                   
                {digest.map(digests =>(
                    <p>{digests.label}: {digests.total}{digests.unit}</p>
                ))}
           
                    </td>
                </tr>
            </table> */}

                    <div className={style.fooddatadiv}>
                        <div className={style.subdivfooddata}>
                        <h3>{title}</h3>
                        <img className={style.image} src={image} alt="" style={{width:"80%"}} />
                         <p> Quantity: 100 g </p>

                         <h3>Healthy : </h3> 
                                 
                {digest.map(digests =>(
                    <p>{digests.label}: {digests.total}{digests.unit}</p>
                ))}
                        </div>
                        

                    </div>







        </div>

    );

}
export default FoodDatabase;