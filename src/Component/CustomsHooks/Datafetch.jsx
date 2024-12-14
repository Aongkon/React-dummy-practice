import useFetch from "./useFetch"

const Datafetch = () => {

   const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos")
   

    const items = data && data.map((todo, id) => {
        return (
            <p key={id}>{todo.title}</p>
        )
    })

    const loadingMessage = <p>Data is loading ....</p>
    const errorMessage = <p>{error}</p>

  return (
    <div>
      {error && errorMessage}
      {isLoading && loadingMessage}
      {items}
    </div>
  );
}

export default Datafetch;
//fetch er bhitor sobsomoy data url bosbe