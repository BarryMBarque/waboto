import {NextApiRequest, NextApiResponse} from 'next';
import {connect} from '../../../utils/Database'


interface ErrorResponseType {
  error: string;
}

interface SucessResponseType{
  _id: string;
  name: string;
  email: string
}
export default async  (req: NextApiRequest, res: NextApiResponse<ErrorResponseType|SucessResponseType>): Promise<void> =>{


  const {name, email} = req.body
  if(!name|| !email){
    res.status(400).json({error: 'missing parameters'})
    return
  }
  const {db} = await connect()
  if (req.method== 'POST'){
    const response = await db.collection('users').insertOne({
     name,
     email
    })
    res.status(200).json(response.ops[0])
  }else{
    res.status(400).json({error: 'error request method'})
  }



  //m7OCfp7RKNxRfNPd

}
