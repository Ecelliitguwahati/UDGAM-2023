import React from "react";
import { useState } from "react";

const Box = (props) => {
	const [isShown, setIsShown] = useState(false);
	const [sc, setsc] = useState(1);
	return (
		<div
			className="asr"
			style={{
				height: `fit-content`,
				width: `fit-content`,
				border: `0`,
				display: `flex`,
				flexDirection: `column`,
				justifyContent: `space-between`,
				marginBottom: `23px`,
			}}
		>
			<div
				style={{
					height: `258px`,
					width: `273px`,
					backgroundImage: `url(${props.bg})`,
					position: `relative`,
					overflow: `hidden`,
				}}
				onMouseEnter={() => {
					setIsShown(true);
					setsc(1.2);
				}}
				onMouseLeave={() => {
					setIsShown(false);
					setsc(1);
				}}
			>
				{isShown && (
					<a
						href={props.link}
						style={{
							height: `fit-content`,
							width: `fit-content`,
							zIndex: `2`,
						}}
					>
						<img
							src={props.in}
							style={{
								height: `34px`,
								position: `absolute`,
								top: `12px`,
								right: `12px`,
								zIndex: `2`,
							}}
						/>
					</a>
				)}
				<img
					src={props.img}
					alt=""
					style={{
						height: `257px`,
						width: `286px`,
						scale: `${sc}`,
						transition: `0.5s`,
						marginTop: ``,
						position:`relative`,
						top:`2px`
					}}
				/>
			</div>
			<div
				className="textContainer"
				style={{
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `space-between`,
					fontFamily: "sans-serif",
					alignItems: `flex-start`,
				}}
			>
				<p
					style={{
						fontSize: `32px`,
						color: `#44C6B6`,
						margin: `23px 0 -5px 0`,
					}}
				>
					{props.name}
				</p>
				<p
					style={{
						fontSize: `24px`,
						color: `#CDCCD0`,
						margin: `-1px 0`,
					}}
				>
					{props.comp}
				</p>
				<p style={{ fontSize: `16px`, color: `#6A6771` }}>
					{props.desg}
				</p>
			</div>
		</div>
	);
};

export default Box;
