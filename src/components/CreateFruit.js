export default function CreateFruit({fruitsList, setFruitsList,fruit,setFruit}) {

  function addInputToList(){
    let input=document.getElementById('fruitName').value
    setFruit(input)
    setFruitsList([...fruitsList,input])
  }    

  return (
    <div>
        <input id="fruitName" type="text" name='name' placeholder='Enter the name' />
        <button type='submit' onClick={() => addInputToList()}>Add</button>
   </div>
  )
}
