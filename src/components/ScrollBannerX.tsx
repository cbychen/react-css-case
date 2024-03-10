import React, { useLayoutEffect, useRef, useState } from 'react'
import './scrollBanner.css'

const ScrollBannerX: React.FC = (props) => {
	const scrollRef = useRef(null);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
		if (scrollRef.current) {
			setHeight(scrollRef.current.offsetHeight);
			setWidth(scrollRef.current.offsetWidth);
		}
		
	}, []);
	return (
		<div className="scroll-container" ref={scrollRef}>
			<div
				className="scroll-wrap"
				style={{ height: width + "px", width: height + "px" ,transform: `translateY(${height}px) rotate(-90deg)`}}
			>
				<div
					className="content"
					style={{
						width: width + "px",
						height: height + "px",
						left: height + "px",
					}}
				>
					<div className="card-list">
						<div className="card">
							<img src="https://picsum.photos/1920" alt="" />
						</div>

						<div className="card">
							<img src="https://picsum.photos/1920" alt="" />
						</div>
						<div className="card">
							<img src="https://picsum.photos/1920" alt="" />
						</div>
						<div className="card">
							<img src="https://picsum.photos/1920" alt="" />
						</div>
						<div className="card">
							<img src="https://picsum.photos/1920" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollBannerX;