import Head from 'next/head'
import {useEffect} from 'react'
import anime from 'animejs'


export default function Home() {

	useEffect(() => {

		var tl = anime.timeline({
			easing: 'easeInOutSine',
			duration: 3000,
		})

		tl.add({
			targets: '#initials path',
			strokeDashoffset: [anime.setDashoffset, 0],
			fill: {
				value: '#2E3A59',
				delay: anime.stagger(500, {start: 2000}),
			},
			delay: anime.stagger(400, {start: 300}),
		})

		tl.add({
			easing: 'linear',
			delay: 500,
			duration: 1500,
			targets: '#link-icons',
			height: ['0', '50px'],
		})
	}, [])

	const description = 'Personal website for Glenn Van De Putte.'
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
			<Head>
				<title>Glenn Van De Putte</title>
				<link rel="icon" href="/logo.svg"/>
				<meta name="description" content={description}/>
				<meta name="google-site-verification" content="Pj1ATvoL2tXCTzxzxr9aG_u73AjTkwjFbXsmm0P9hPw" />

				{/* Twitter */}
				<meta name="twitter:card" content="Glenn's Homepage" key="twcard" />
				<meta name="twitter:creator" content={'vdpglenn'} key="twhandle" />

				{/* Open Graph */}
				<meta property="og:url" content={'https://www.gvdp.be'} key="ogurl" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={"https://gvdp.be/logo.svg"} key="ogimage" />
				<meta property="og:site_name" content={'gvdp.be'} key="ogsitename" />
				<meta property="og:title" content={'Glenn Van De Putte'} key="ogtitle" />
				<meta property="og:description" content={description} key="ogdesc" />
			</Head>

			<main className="flex flex-col items-center justify-around flex-1 container">
				<svg id="initials" className={'w-5/6 md:w-2/3'} viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={'Animated Logo with Initials'}>
					<path id={'d'}
											d="M 420 50 C 420 47.2386 422.239 45 425 45 C 425 45 425.002 45 425.005 45 L 425.043 45.0001 L 425.15 45.0004 C 425.241 45.0009 425.375 45.0017 425.548 45.0033 C 425.895 45.0065 426.403 45.0129 427.061 45.0255 C 428.377 45.0506 430.293 45.1008 432.724 45.2005 C 437.586 45.4 444.514 45.7981 452.82 46.5932 C 469.409 48.1812 491.611 51.3629 513.88 57.758 C 536.092 64.1366 558.742 73.8153 575.92 88.6146 C 593.246 103.541 605 123.702 605 150.51 C 605 177.32 593.243 197.423 575.907 212.257 C 558.722 226.962 536.067 236.51 513.854 242.759 C 491.583 249.025 469.381 252.077 452.791 253.568 C 444.485 254.315 437.557 254.673 432.695 254.844 C 430.264 254.93 428.348 254.969 427.032 254.986 C 426.374 254.995 425.866 254.998 425.519 254.999 C 425.346 255 425.212 255 425.12 255 L 425.014 255 L 424.984 255 L 424.976 255 L 424.971 254.999 C 422.209 254.983 419.984 252.732 420 249.97 C 420.016 247.209 422.267 244.984 425.028 245 C 425.028 245 425.028 245 425.028 245 L 425.05 245 L 425.133 245 C 425.21 245 425.327 245 425.485 244.999 C 425.8 244.998 426.275 244.995 426.899 244.987 C 428.147 244.97 429.99 244.933 432.344 244.85 C 437.052 244.685 443.796 244.337 451.896 243.609 C 468.119 242.15 489.667 239.176 511.146 233.133 C 532.683 227.074 553.778 218.031 569.405 204.659 C 584.882 191.416 595 173.955 595 150.51 C 595 127.063 584.879 109.533 569.393 96.1907 C 553.758 82.7215 532.658 73.5547 511.12 67.3695 C 489.639 61.2008 468.091 58.1007 451.867 56.5477 C 443.768 55.7724 437.023 55.3853 432.315 55.1921 C 429.961 55.0955 428.117 55.0475 426.87 55.0236 C 426.246 55.0117 425.771 55.0058 425.456 55.0029 C 425.298 55.0014 425.18 55.0007 425.104 55.0003 L 425.021 55 L 425 55 C 422.239 54.9996 420 52.7612 420 50 Z"
											strokeWidth={'4'} stroke={'#2E3A59'}/>
					<path id={'g-bar'}
											d="M146 175C146 172.791 147.791 171 150 171H200C202.209 171 204 172.791 204 175C204 177.209 202.209 179 200 179H150C147.791 179 146 177.209 146 175Z"
											strokeWidth={'4'} stroke={'#2E3A59'}/>
					<path id={'p-vertical-bar'}
											d="M625 170C627.761 170 630 172.239 630 175V250C630 252.761 627.761 255 625 255C622.239 255 620 252.761 620 250V175C620 172.239 622.239 170 625 170Z"
											strokeWidth={'4'} stroke={'#2E3A59'}/>
					<path id={'v'}
											d="M220.196 51.3871 C219.43 48.734 220.96 45.9623 223.613 45.1962 C226.266 44.4302 229.038 45.9599 229.804 48.6129 L229.967 49.176 C230.076 49.5508 230.239 50.1085 230.453 50.8371 C230.881 52.2942 231.514 54.4342 232.33 57.1598 C233.961 62.611 236.327 70.4027 239.259 79.7541C245.125 98.4633 253.249 123.387 262.293 148.293 C271.351 173.238 281.275 198.004 290.728 216.472C295.467 225.73 299.98 233.188 304.085 238.261 C306.139 240.798 307.96 242.574 309.515 243.681C311.089 244.802 312.052 245 312.5 245 C312.948 245 313.911 244.802 315.485 243.681C317.04 242.574 318.861 240.798 320.915 238.261 C325.02 233.188 329.533 225.73 334.272 216.472C343.725 198.004 353.649 173.238 362.707 148.293 C371.751 123.387 379.875 98.4633 385.741 79.7541C388.673 70.4027 391.039 62.611 392.671 57.1598 C393.486 54.4342 394.119 52.2942 394.547 50.8371C394.761 50.1085 394.924 49.5508 395.033 49.176L395.194 48.6208 L395.196 48.6146 M395.196 48.6146 C395.962 45.9599 398.734 44.4302 401.387 45.1962 C404.04 45.9623 405.57 48.734 404.804 51.3871 L404.76 51.5373C404.732 51.6352 404.69 51.7804 404.634 51.9714 C404.523 52.3535 404.358 52.9188 404.142 53.6551C403.709 55.1277 403.072 57.2845 402.25 60.0277C400.608 65.514 398.23 73.3473 395.283 82.7459C389.391 101.537 381.218 126.613 372.106 151.707C363.008 176.762 352.916 201.996 343.173 221.028C338.315 230.52 333.435 238.687 328.688 244.552C326.315 247.484 323.845 250.004 321.285 251.827C318.745 253.636 315.771 255 312.5 255C309.229 255 306.255 253.636 303.715 251.827C301.155 250.004 298.685 247.484 296.312 244.552C291.565 238.687 286.685 230.52 281.827 221.028C272.084 201.996 261.992 176.762 252.894 151.707C243.782 126.613 235.609 101.537 229.717 82.7459C226.77 73.3473 224.392 65.514 222.75 60.0277C221.928 57.2845 221.291 55.1277 220.858 53.6551C220.642 52.9188 220.477 52.3535 220.366 51.9714C220.31 51.7804 220.268 51.6352 220.24 51.5373L220.197 51.39"
											strokeWidth={'4'} stroke={'#2E3A59'}/>
					<path id={'g-round'}
											d="M 39.3801 96.8234 C 61.2515 70.2377 106.671 45 200 45 C 202.761 45 205 47.2386 205 50 C 205 52.7614 202.761 55 200 55 C 108.329 55 66.3649 79.7623 47.1027 103.177 C 37.4222 114.944 33.2189 126.66 31.4217 135.384 C 30.522 139.751 30.2263 143.367 30.1522 145.852 C 30.1152 147.094 30.1335 148.05 30.1589 148.674 C 30.1716 148.985 30.186 149.213 30.196 149.352 C 30.201 149.421 30.2049 149.467 30.207 149.491 L 30.2076 149.499 L 30.2068 149.491 C 30.2074 149.496 30.2079 149.502 30.2085 149.507 C 30.2409 149.835 30.2409 150.165 30.2085 150.493 C 30.2079 150.498 30.2074 150.504 30.2068 150.509 C 30.2068 150.509 30.2072 150.505 30.2076 150.501 L 30.207 150.509 C 30.2049 150.533 30.201 150.579 30.196 150.648 C 30.186 150.787 30.1716 151.015 30.1589 151.326 C 30.1335 151.95 30.1152 152.906 30.1522 154.148 C 30.2263 156.633 30.522 160.249 31.4217 164.616 C 33.2189 173.34 37.4222 185.056 47.1027 196.823 C 66.3649 220.238 108.329 245 200 245 C 202.761 245 205 247.239 205 250 C 205 252.761 202.761 255 200 255 C 106.671 255 61.2515 229.762 39.3801 203.177 C 28.4938 189.944 23.6927 176.66 21.6274 166.634 C 20.5958 161.626 20.2456 157.429 20.1566 154.446 C 20.1121 152.953 20.1329 151.761 20.1672 150.92 C 20.1826 150.541 20.2007 150.233 20.2169 150 C 20.2007 149.767 20.1826 149.459 20.1672 149.08 C 20.1329 148.239 20.1121 147.047 20.1566 145.554 C 20.2456 142.571 20.5958 138.374 21.6274 133.366 C 23.6928 123.34 28.4938 110.056 39.3801 96.8234 Z"
											strokeWidth={'4'} stroke={'#2E3A59'}/>
					<path id={'p-curve'}
											d="M 620 49.948 C 620.029 47.1867 622.291 44.9715 625.052 45.0003 C 625.052 45.0003 625.053 45.0003 625.055 45.0003 L 625.086 45.0007 L 625.174 45.0018 C 625.251 45.0028 625.363 45.0043 625.51 45.0067 C 625.803 45.0113 626.234 45.019 626.793 45.0312 C 627.912 45.0555 629.545 45.0978 631.619 45.1697 C 635.766 45.3137 641.679 45.5764 648.772 46.0523 C 662.941 47.0029 681.891 48.8088 700.888 52.2369 C 719.804 55.6502 739.14 60.7351 753.871 68.4035 C 768.434 75.9841 780 86.9412 780 102.574 C 780 118.274 768.351 128.899 753.747 135.994 C 738.99 143.164 719.636 147.579 700.721 150.336 C 681.72 153.105 662.769 154.254 648.599 154.713 C 641.506 154.942 635.592 155 631.445 155 C 629.372 155 627.739 154.986 626.62 154.971 C 626.06 154.964 625.63 154.957 625.336 154.951 C 625.19 154.948 625.077 154.946 625.001 154.944 L 624.913 154.942 L 624.882 154.942 L 624.879 154.942 C 622.118 154.875 619.934 152.582 620.002 149.822 C 620.069 147.061 622.361 144.877 625.121 144.945 L 625.121 144.946 C 625.121 144.945 625.121 144.945 625.121 144.945 L 625.125 144.945 L 625.217 144.947 C 625.284 144.948 625.387 144.95 625.524 144.953 C 625.799 144.958 626.21 144.965 626.749 144.972 C 627.828 144.986 629.418 145 631.445 145 C 635.502 145 641.306 144.944 648.276 144.718 C 662.231 144.266 680.78 143.137 699.279 140.441 C 717.864 137.732 736.01 133.494 749.378 126.999 C 762.899 120.43 770 112.381 770 102.574 C 770 92.701 762.816 84.3332 749.254 77.2737 C 735.861 70.3019 717.696 65.4315 699.112 62.0779 C 680.609 58.739 662.059 56.9662 648.103 56.0299 C 641.133 55.5623 635.328 55.3045 631.272 55.1637 C 629.244 55.0934 627.654 55.0523 626.576 55.0288 C 626.037 55.0171 625.625 55.0098 625.351 55.0054 C 625.214 55.0032 625.111 55.0018 625.043 55.0009 L 624.969 55 L 624.948 54.9997 C 624.948 54.9997 624.948 54.9997 624.948 54.9986 L 624.948 54.9997 C 622.187 54.971 619.972 52.7092 620 49.948 Z"
											strokeWidth={'4'} stroke={'#2E3A59'}/>
				</svg>

				<div className={'flex justify-center items-center overflow-hidden'} id={'link-icons'}>
					<a href='https://github.com/gvdp' aria-label={'Github'}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
	d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
	fill="#2E3A59"/>
						</svg>
					</a>
					<a href='https://twitter.com/vdpglenn' aria-label={'Twitter'}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
	d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"
	fill="#2E3A59"/>
						</svg>
					</a>
					<a href='mailto:vdputteglenn@gmail.com' aria-label={'Email'}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
	d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
	fill="#2E3A59"/>
						</svg>
					</a>
					<a href='https://www.linkedin.com/in/glenn-van-de-putte-7ab29075/' aria-label={'LinkedIn'}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
	d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"
	fill="#2E3A59"/>
						</svg>
					</a>
				</div>
			</main>

		</div>
	)
}
