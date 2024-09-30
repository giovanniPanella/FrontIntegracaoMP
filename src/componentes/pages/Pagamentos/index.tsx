
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import postCriarPix from '../../Services/Service';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function Pagamentos() {

    const [ticketUrl,setTicketUrl]= useState("")
    const MOCK_BODY={
        transaction_amount: 1,
        description: "Delicioso Hambuger no Mc a um passo de de você",
        paymentMethodId: "pix",
        email:"ggpanellaa@gmail.com",
        identificationType: "CPF",
        number: "03883696988"

    }

 const handlePost = ()=>{
     postCriarPix(MOCK_BODY).then(
        response=>{
            console.log("response")
            setTicketUrl(response.data.point_of_interaction.transaction_data.ticket_url)
        }
     ).catch()

 }


  return (
    <>
    <Box  display="flex" gap={4} flexDirection="column" height="100vh" pt={4}>
    <Card sx={{ width: 480, minHeight:360}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.empiricus.com.br/uploads/2023/12/Indice-Big-Mac.jpg"
        title="BigMaC"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BigMac
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {MOCK_BODY.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Valor:<strong> R${MOCK_BODY.transaction_amount}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Tipo de Pagamento:<strong> {MOCK_BODY.paymentMethodId}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Seu e-mail:<strong> {MOCK_BODY.email}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           CPF:<strong> {MOCK_BODY.number}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick={handlePost} variant='contained' size="small">Pagar com Pix</Button>
        
      </CardActions>
    </Card>
{
    ticketUrl &&
     < Card sx={{ width: 480, height:850}}>
        <iframe src={ticketUrl}  width="100%" height="100%"></iframe>
     </Card>
}
 </Box>
     </>

  );
}
