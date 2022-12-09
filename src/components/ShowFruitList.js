import React from 'react'

export default function ShowFruitList({fruitsList}) {
   

  return (
    <div>
        <table>
            {
                fruitsList.map((item,index)=> (                
                    <tr>
                        <td>{item}</td>
                        {/* <td><button onClick={editFruit}>edit</button></td> */}
                        <td><button onClick={e => deleteFruit(index,e)}>Delete</button></td>

                    </tr>
                ))
            }
      </table>
    </div>
  )
}
