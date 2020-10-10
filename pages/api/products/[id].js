import { getProduct } from '../../../services/ProductService';

export default async function (req, res) {
  const { id, shopOrigin } = req.query;
  const product = await getProduct(shopOrigin, id);
  res.status(200).send(product);
}