function PreviewPageBanner() {
	return (
		<main className='previewPage'>
			<div className='container'>
				<h1 className='previewPage__h1'>
					Соседи называют этот дом <br /> «ЖК Несчастье»
				</h1>
				<p className='previewPage__subtitle'>
					Здесь каждый этаж — это испытание. А там, где флажок, случилась беда.
					Хорошо, что у жильцов есть вы!
				</p>
				<div className='previewPage__wrapper'>
					<div>
						<p>
							Заходите в квартиры ниже <br /> с 🚩 и проходите задания.
						</p>
					</div>
					<div>
						<p>
							Помогайте, собирайте бонусы <br /> и зарабатывайте скидки!
						</p>
					</div>
				</div>
				<a className='btn' href='#start'>
					Играть
				</a>
			</div>
		</main>
	)
}

export default PreviewPageBanner
