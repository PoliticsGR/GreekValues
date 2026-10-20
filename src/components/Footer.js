import { Stack } from 'react-bootstrap';
import GreekValues from '../assets/img/GreekValues.png';
import PoliticsGR from '../assets/img/PoliticsGR.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer p-4'>
            <Stack direction='horizontal' gap={3} className='d-flex justify-content-center align-items-center'>
                <Stack gap={3}>
                    <img src={PoliticsGR} alt='PoliticsGR Logo' className='politicsgr-logo' width='140' height='110' />
                    <p>Copyright @{currentYear} PoliticsGR</p>
                </Stack>
                <Stack gap={3}>
                    <img src={GreekValues} alt='GreekValues Logo' className='gv-logo' width='205' height='65' />
                    <p>Το απόλυτο κουίζ του ελληνικού πολιτικού φάσματος</p>
                </Stack>
            </Stack>
        </footer>
    )
}