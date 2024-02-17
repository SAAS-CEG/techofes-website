'use client';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

export function ThreeDCardDemo() {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 flex items-center justify-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-60 h-80 rounded-xl p-6 border  ">
				{/* <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
					Make things float in air
				</CardItem> */}
				{/* <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
					Hover over this card to unleash the power of CSS perspective
				</CardItem> */}
				<CardItem translateZ="100" className="w-40 mt-4">
					<img
						src="https://www.mydesignation.com/wp-content/uploads/2020/02/golden-yellow-plain-tshirt-mydesignation.jpg"
						className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				{/* <div className="flex justify-between items-center mt-20">
					<CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
						Try now →
					</CardItem>
					<CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
						Sign up
					</CardItem>
				</div> */}
			</CardBody>
		</CardContainer>
	);
}
