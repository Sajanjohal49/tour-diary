
import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';

  const DumyMeetup = [
    {
      id: "m1",
      title: "Dummy Text",
      image:
        "https://images.unsplash.com/photo-1655192937214-b53da84b8b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "this is a long description of this application ",
      address: "Malton,Mississauga,Ontario",
    },
    {
      id: "m2",
      title: "Dummy Text",
      image:
        "https://images.unsplash.com/photo-1655192937214-b53da84b8b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "this is a long description of this application ",
      address: "Malton,Mississauga,Ontario",
    },
    {
      id: "m3",
      title: "Dummy Text",
      image:
        "https://images.unsplash.com/photo-1655192937214-b53da84b8b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "this is a long description of this application ",
      address: "Malton,Mississauga,Ontario",
    },
  ];
  const Homepage = (props) => {

  return <MeetupList meetups={props.meetups} />;
};
//if the data does'n t change frequently then this method is ok
// export async function  getServerSideProps(context){
//     const res =context.res;
//     const req = context.req;
//     return{
//         props:{
//             meetups:DumyMeetup
//         }
//         //don't need to have revalidate because this function runs after incoming request from client
//     }
// }

 //use function instead const 
//use Props instead of anything so that it would be a great practice
export async function getStaticProps(){
    const client = await MongoClient.connect(
        'mongodb+srv://sajan:johalsaab@cluster0.aae48.mongodb.net/meetups?retryWrites=true&w=majority'
        );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const meetups =await meetupsCollection.find().toArray();
      client.close();
    return {
            props:{
                meetups:meetups.map((meetup)=>({
                    title:meetup.title,
                    address:meetup.address,
                    description:meetup.description,
                    id:meetup._id.toString(),
                    image:meetup.image,
                }))
            },
            //revalidate to avoid using run build command frequently and 1 is a second format 
            revalidate:1
        };
    
}
export default Homepage;
