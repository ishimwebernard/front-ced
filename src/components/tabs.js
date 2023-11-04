import react, {useState} from 'react'


export default function Tabs(props) {
	const [activeTab, setActiveTab] = useState(0);
	const tabElements = [], tabContentElements = [];
	
	props.elements.map((element)=>{
	
		tabElements.push(
			<li className={activeTab == element.index ? "mr-2 bg-white":"mr-2"} onClick={()=>{setActiveTab(element.index);console.log(`State changes ${activeTab}`)}}>
             	<button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"  type="button" role="tab" aria-controls="timetable">{element.text}</button>
            </li>	
			)
		
	})

	props.contentTabs.map((contentTab)=>{
		tabContentElements.push(
			<div className={activeTab == contentTab.index ? "p-4 bg-gray-50 rounded-lg":"hidden"}> 
				{contentTab.jsx}
			</div>

			)
		
	})

	return (
		<div>
			<ul className="flex flex-wrap -mb-px">
				{tabElements}

			</ul>
			<div className={activeTab == 0 ? "bg-red-400":"bg-white"}>
				{tabContentElements}
				
			</div>
		</div>
		)
}