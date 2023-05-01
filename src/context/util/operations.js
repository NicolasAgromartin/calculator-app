function addition(nums) {

  console.log(nums)
}

export function operations(entrance) {

    entrance.filter( e => {e === '+' && addition(entrance)} )


  // entrance.filter( e => {e === '-' && setEntrance(/* restar los numeros */) } )
  // entrance.filter( e => {e === 'x' && setEntrance(/* multiplicar los numeros */) } )
  // entrance.filter( e => {e === '/' && setEntrance(/* dividir los numeros */) } )

}