import Layout from './components/Layout'
import { Banner } from './components/Banner'
import { Opening } from './components/Opening'
import { useOpenInvitation } from './hooks'

function App() {
  const {isOpen, handlePlay} = useOpenInvitation();
  
  return (
    <Layout>
        <Banner isOpen={isOpen} handlePlay={handlePlay}/>
        <Opening isOpen={isOpen}/>
    </Layout>
  )
}

export default App
