import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel/dist/index';

const News = () => {

	const [news, setNews] = useState(null)
	const [loading, setLoading] = useState(true)
	const [category, setCategory] = useState('general')
	const [country, setCuntry] = useState('us')

	useEffect(() => {

		fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=050ed27baa394e169ab07b49f3780983`)
			.then(res => res.json())
			.then(data => {
				setNews(data)
				setLoading(false)
				console.log(data)
			})

	}, [country, category])



	const handleCategory = (e) => {
		setCategory(e.target.value)
		console.log(category);
	}

	const handleCountry = (e) => {
		setCuntry(e.target.value)
		console.log(country);
	}



	return (
		<div className="news">

			{loading && <img src="Spinner-1s-200px.svg" alt="spiner" />}
			<div className="select-area">
				<h3>PLease fill the Country and the category of news that you want. </h3>
				<div  className="selection">
					<label htmlFor="Country">Country :</label>
					<select
						onChange={handleCountry}
						defaultValue={country}
					>
						<option placeholder="egypt">us </option>
						<option>eg</option>
						<option>ua</option>
						<option>fr</option>
						<option>ar</option>
						<option>gr</option>
						<option>ro</option>
					</select>
				</div>
				<div className="selection">
					<label htmlFor="Category">Category:</label>
					<select
						onChange={handleCategory}
						defaultValue={category}
					>
						<option>general</option>
						<option>sport</option>
						<option>science</option>
						<option>health</option>
						<option>technology</option>
						<option>business</option>
					</select>
				</div>
			</div>
			{news && <Carousel itemsToShow={1} showArrows={false}>
				{news.articles.map((article) => {
					return (
						<div key={article.id} className="article-cont">
							<a href={article.url}><h4>{article.title}</h4>
								<img src={article.urlToImage} alt="article" />
								<p>{article.description}</p>
								<p>{article.content}</p>
								<p className="author"> author :{article.author}</p>
								<p className="publish">publish at {article.publishedAt}</p>
								
							</a>
						</div>
					)
				})}
			</Carousel>}
		</div>
	)
}

export default News
