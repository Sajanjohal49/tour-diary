import { Fragment } from "react";
import Head from 'next/head'
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  async function onAddMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-Meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    
  }
  return <Fragment>
    <Head><title>Add a meetup</title>
    <meta name="description" content=' Add your own meetup '/></Head>
    <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;</Fragment>
  
}
export default NewMeetup;
