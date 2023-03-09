import { GlobeAmericas } from "@/public/assets/icons/icons";
import generateUniqueId from "@/utils/generateUniqueId";




export const nav_data = [

	{
		id : generateUniqueId(), label : "home", link : "/", isActive : true, icon : <GlobeAmericas/>,
	},

	{
		id : generateUniqueId(), label : "about", link : "/about", isActive : false, icon : <GlobeAmericas/>,

	}, {
		id : generateUniqueId(), label : "contact", link : "/about/contact", isActive : false, icon : <GlobeAmericas/>,

	}, {
		id : generateUniqueId(), label : "projects", link : "/projects", isActive : false, icon : <GlobeAmericas/>,

	}, {
		id : generateUniqueId(), label : "blog", link : "/blog", isActive : false, icon : <GlobeAmericas/>,

	},


]
