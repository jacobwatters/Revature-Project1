import Link from 'next/link'
import Layout from '../../components/layout'
import axios from 'axios'
const reimbursement = ( {data} ) => {
  // const router = useRouter()
  // const { id } = router.query
  console.log(JSON.stringify(data))
  return (
    <Layout>
      <h1>Id: {data.id}</h1>
      <p>Status</p>
      <br />
      <Link href='/'>Go Back</Link>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const data = await axios.get(`http://localhost:8080/api/reimbursements/${context.params.id}`).then(
    (res) => {
      return res.data
    })
    data.status = data.status.status
    data.type = data.type.type
    return {
      props: {
        data,
      },
    }
  }
  
  export const getStaticPaths = async () => {
    const data = await axios.get('http://localhost:8080/api/reimbursements').then(
    (res) => {
      res.data.map(r => {
        r.status = r.status.status
        r.type = r.type.type
      })
      return res.data
    })
    console.log(JSON.stringify(data))

    const ids = data.map((reimbursement) => reimbursement.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    console.log("PATHS: " + paths)
    return {
      paths,
      fallback: false,
    }
  }
  export default reimbursement