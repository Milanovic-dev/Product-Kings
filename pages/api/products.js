import { createProduct } from '../../services/ProductService';

export default async (req, res) => {
  const { method, body } = req;

  switch(method){
    case 'POST': 
    try{
      const { success } = createProduct(body.name, body.shop);
      res.status(201).json({success});
    }catch(err){
      res.status(400).json({success: 'error', error: err});
    }
    break;
    default: 
      res.status(405).json({success: false, error: 'Method is not allowed.'});
  }
};