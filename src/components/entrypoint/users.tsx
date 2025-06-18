import Classroom from '../user/classroom'
import Create from '../user/createclass'
const userRoutes = [
    {
        path:"/classroom",
        element: <Classroom/>
    },
    {
        path:"/createclass",
        element: <Create/>
    }
]

export default userRoutes