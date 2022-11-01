import './App.css';

function App() {
  return (
	  <div>
	  	<div className = "header" >
	  		<div className="container">
	  			<div className="logo">
			
				</div>

				<div className="enter">
	  				<a href="">
	  					Войти
	  				</a>
				</div>
	  		</div>
		</div>
		
		<div className = "main">
			<div className = "buttons">
				<div className = "pair1">
					<select value="0" name="" id="list">
						<option value="0">ПМ-11</option>
						<option value="1">ПМ-21</option>
						<option value="2">ПМ-31</option>
					</select>
					<div className = "settings">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
					</div>
				</div>
				<div className = "pair2">
					<div className = "create">
						
					</div>
					<div className = "settings-pair2">
						
					</div>
				</div>
			</div>
			
			<div className = "main-table">
				<div className = "table-week">
					<div className="table-week-day">
						<div className="nameOfDay">
							Понедельник
							<div className="js-date">
								1
							</div>
						</div>
						<div className="placeToDrop">
							Выходной
						</div>
					</div>
					
					<div className="table-week-day">
						<div className="nameOfDay">
							Вторник
							<div className="js-date">
								2
							</div>
						</div>
						<div className="placeToDrop">
							Выходной
						</div>
					</div>
					
					<div className="table-week-day">
						<div className="nameOfDay">
							Среда
							<div className="js-date">
								3
							</div>
						</div>
						<div className="placeToDrop">
							Выходной
						</div>
					</div>
					
					<div className="table-week-day">
						<div className="nameOfDay">
							Четверг
							<div className="js-date">
								4
							</div>
						</div>
						<div className="placeToDrop">
							Выходной
						</div>
					</div>
					
					<div className="table-week-day">
						<div className="nameOfDay">
							Пятница
							<div className="js-date">
								5
							</div>
						</div>
						<div className="placeToDrop">
							Выходной
						</div>
					</div>
					
					<div className="table-week-day">
						<div className="nameOfDay">
							Суббота
							<div className="js-date">
								6
							</div>
						</div>
						<div className="placeToDrop">
							Выходной
						</div>
					</div>
					
					<div className="table-week-day">
						<div className="nameOfDay">
							Воскресенье
							<div className="js-date">
								7
							</div>
						</div>
						<div className="placeToDrop">
							Выходной
						</div>
					</div>
					
				</div>
				
				<div className = "table-work">
					<div className="search">
						<div className="search-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
						</div>
						<input id = "txtarea" placeholder="Поиск">
							
						</input>
						<div className="search-settings">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/></svg>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	  </div>
    
  );
}

export default App;
