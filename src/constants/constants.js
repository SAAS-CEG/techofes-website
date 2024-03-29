const eventRegistrationDetails = [
	{
		id: '1',
		eventName: 'Eco Drive',
		image: '/events/Eco_Drive.jpg',
		description:
			"Over 600 students from Anna University's CEG campus joined forces for Eco-Drive on the 25th of February, a clean-up initiative. Led by student groups and faculty, the event focused on clearing waste and planting saplings for a greener future.",
	},
	{
		id: '2',
		eventName: 'Utopia',
		image: '/events/Utopia.jpg',
		description:
			'Utopia, a 2-day student-organized event on November 29th-30th which brought a whirlwind of fun and competition to the campus. Students from all corners of the campus participated in exciting contests, showcasing their talents and battling it out for the top prize. The event culminated with a thrilling concert, leaving everyone energized and entertained',
	},
];

const canvasSpaceEvents = [
	{
		e_id: 'CS01',
		title: "Micro Film Contest",
		image_link: "/events/canvasSpace/film_contest.jpg",
		details: "Showcase your videography prowess by sharing your creative work in this Micro Film Contest presented by Canvas Space!",
		entry_pass: 0,
		prize_money: 50000
	},
	{
		e_id: 'CS01',
		title: "Micro Song Contest",
		image_link: "/events/canvasSpace/song_contest.jpg",
		details: "Showcase your audiography prowess by sharing your creative work in this Micro Song Contest presented by Canvas Space!",
		entry_pass: 0,
		prize_money: 50000
	}
]

const pages = [
	{ id: '1', name: 'Home', link: '/#home' },
	{ id: '3', name: 'Events', link: '/events' },
	{ id: '4', name: 'Accommodation', link: '/accomodation' },
	{ id: '5', name: 'Merchandise', link: '/merchandise' },
	{ id: '6', name: 'Sponsor', link: '/sponsors' },
	{ id: '7', name: 'Contact', link: '/contact' },
	{ id: '8', name: 'SignIn', link: '/signin' },
];

const loggedin = [
	{ id: '1', name: 'Home', link: '/#home' },
	{ id: '3', name: 'Events', link: '/events' },
	{ id: '4', name: 'Accommodation', link: '/accomodation' },
	{ id: '5', name: 'Merchandise', link: '/merchandise' },
	{ id: '6', name: 'Sponsor', link: '/sponsors' },
	{ id: '7', name: 'Contact', link: '/contact' },
	{ id: '8', name: 'Profile', link: '/profile' },
]

export { eventRegistrationDetails, pages, loggedin, canvasSpaceEvents };
