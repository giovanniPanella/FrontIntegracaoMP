import axios from "axios";

async function postCriarPix (body:any){
   return await axios.post('http://localhost:3000/gerar-pix',
        {body}
      )
    //  .then((response)=> {
     //   console.log(response);
    //  })
    //  .catch((error)=> {
    //    console.error(error);
    //  })


    
}

export default postCriarPix