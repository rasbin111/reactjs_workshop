import "@mantine/core/styles.css";

import { MantineProvider } from '@mantine/core'
import PersonTable from './PersonTable'

function App() {


    return (
        <MantineProvider>

            <PersonTable />
        </MantineProvider>
    )
}

export default App
