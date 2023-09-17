
import { faCalendarCheck, faComment } from '@fortawesome/free-solid-svg-icons';

import Profile1 from "../assets/img/team/profile-picture-1.jpg"
import Profile2 from "../assets/img/team/profile-picture-2.jpg"
import Profile3 from "../assets/img/team/profile-picture-3.jpg"
import Profile4 from "../assets/img/team/profile-picture-4.jpg"

export default [
    {
        "id": 1,
        "image": Profile1,
        "name": "Dr. Wood",
        "statusKey": "online",
        "icon": faCalendarCheck,
        "btnText": "Create Appt."
    },
    {
        "id": 2,
        "image": Profile2,
        "name": "Dr. Leos",
        "statusKey": "inMeeting",
        "icon": faComment,
        "btnText": "Message"
    },
    {
        "id": 3,
        "image": Profile3,
        "name": "Dr. Bonnie Green",
        "statusKey": "offline",
        "icon": faCalendarCheck,
        "btnText": "Create Appt."
    }
]