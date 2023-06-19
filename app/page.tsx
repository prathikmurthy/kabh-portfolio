import PocketBase from 'pocketbase'
import Image from 'next/image'

export default async function Home() {
  const pb = new PocketBase('http://127.0.0.1:8090')

  // const record = await pb.collection("images").getOne("u46uwe8zq0zghhp")

  // console.log(record.documents)

  // const data = await pb.files.getUrl(record, record.field)
  // pb.collection('example').subscribe('*', function (e) {
  //   console.log(e.record);
  // });
  const res = await fetch('http://127.0.0.1:8090/api/collections/images/records?page=1&perPage=30', { cache: 'no-store' });
  const records = (await res.json()).items


  const urls: string[] = records.map((record: any) => {
    // console.log(record)
    const data = pb.files.getUrl(record, record.field)
    return data
  })

  // console.log(urls)

  // const records = await pb.collection('images').getFullList({
  //   sort: '-created',
  // });

  // console.log(records.map((record) => {
  //   return record
  // }))




  return (
    // <img src={data} alt="Picture of the author" width={1920} height={1080}/>
    <div>
      {urls.map((url) => {
        return <div className='flex h-screen'><img src={url} alt="Picture of the author" width={1920} height={1080}/></div>
      })}
    </div> 
  )
}
