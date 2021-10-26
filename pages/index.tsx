import type { NextPage } from 'next'
import Contact from '../components/Contact'
import Jumbotron from '../components/Jumbotron'

const Home: NextPage = () => {
	return (
		<div>
			<main className="main">
				<Jumbotron />
				<Contact />
			</main>
		</div>
	)
}

export default Home
