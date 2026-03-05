
interface projects{
  name:string;
  img:string;
  desc:string;
  link:string;
}
const projects = [

]

function Projects(){
  return (
    <>
      <header>
        <h6 className='text-5xl font-bold my-10 text-left'>Мои проекты</h6>
      </header>
      <div className="text-left text-3xl bg-fuchsia-400/50 w-fit p-5 rounded-full font-medium my-10">Game Dev</div>
      <div className="text-left text-3xl bg-fuchsia-400/50 w-fit p-5 rounded-full font-medium my-10">Frontend</div>
      <div className="text-left text-3xl bg-fuchsia-400/50 w-fit p-5 rounded-full font-medium my-10">Backend</div>
      <div className="text-left text-3xl bg-fuchsia-400/50 w-fit p-5 rounded-full font-medium my-10">Other</div>
    </>
    )
}
export default Projects