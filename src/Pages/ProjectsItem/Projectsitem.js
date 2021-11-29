//Project One
import watch1 from '../../image/W1.jpg'
import watch2 from '../../image/W2.jpg'
import watch3 from '../../image/W3.jpg'
import watch4 from '../../image/W4.jpg'
import watch5 from '../../image/W5.jpg'

//project Two
import health1 from '../../image/H1.jpg'
import health2 from '../../image/H2.jpg'
import health3 from '../../image/H3.jpg'
import health4 from '../../image/H4.jpg'
import health5 from '../../image/H5.jpg'

//Project Three
import travel1 from '../../image/T1.jpg'
import travel2 from '../../image/T2.jpg'
import travel3 from '../../image/T3.jpg'
import travel4 from '../../image/T4.jpg'
import travel5 from '../../image/T5.jpg'


export const projectInfo = [
    {
        img: [watch1, watch2, watch3, watch4, watch5],
        name: 'WATCH COLLECTIONS',
        subtitle: 'You Can See How I Use Different Type Of Connections Here.',
        about1: 'Implemented user interface using React JS, React-Router-Dom and Context API.',
        about2: 'Utilized MongoDB to store client-side user information.',
        about3: 'Build a secure authentication system using Firebase.',
        
        ClientCode: 'https://github.com/tonny29/Watch-collection.git',
        ServerCode:'https://github.com/tonny29/watch-collection-server.git',
        liveSite: 'https://relaxed-spence-d39341.netlify.app'
    },
    {
        img: [health1,health2,health3,health4,health5],
        name: 'HEALTH-CARE-SERVICE',
        subtitle: 'You Can See Medical Service Items And Services.',
        about1: 'Build a secure authentication system using Firebase.',
        about2: 'Implement user interface.',
        about3: 'Display service and with included react router DOM. ',

        ClientCode: 'https://github.com/tonny29/Health-Care-Service.git',
        liveSite: 'https://hospital-service-f35a5f.netlify.app'
    },
    {
        img: [travel1, travel2, travel3,travel4,travel5],
        name: 'TRAVEL SERVICE BOOKING',
        subtitle: 'Here You Book Travel Service Any Country.',
        about1: 'MongoDB to store information.',
        about2: 'Build a secure authentication system using Firebase.',
        about3: 'Added booking system with redirect.',
        
        ClientCode: 'https://github.com/tonny29/Travel-Service.git',
        ServerCode:'https://github.com/tonny29/travel-service-server.git',
        liveSite: 'https://kind-khorana-37030f.netlify.app'
    },
]