import productsData from "../../../data/productData.json";

export async function GET(req: Request, res: Response) {
  return Response.json(productsData);
}
export async function POST(req: Request, res: Response) {
  const info = await req.json();
  productsData.push(info);
  return Response.json(info);
}
