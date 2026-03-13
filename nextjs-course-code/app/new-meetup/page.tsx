'use client'

import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
    async function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
}