var c=0;
function s1s2off()
{
	c=1;
	initSet();
	document.getElementById("header").innerHTML="When S<sub>1</sub> is OFF and S<sub>2</sub> is OFF, light glows";
	setTimeout(function()
	{
		document.getElementById("i12").innerHTML="0";
		document.getElementById("i22").innerHTML="0";
		document.getElementById("i12").style.visibility="visible";
		document.getElementById("i22").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById("i11").innerHTML="closed";
			document.getElementById("i21").innerHTML="closed";
			document.getElementById("i11").style.visibility="visible";
			document.getElementById("i21").style.visibility="visible";
			setTimeout(function()
			{
				
				document.getElementById("i32").innerHTML="0";
				document.getElementById("i42").innerHTML="0";
				document.getElementById("i32").style.visibility="visible";
				document.getElementById("i42").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("i41").innerHTML="open";
					document.getElementById("i31").innerHTML="open";
					document.getElementById("i41").style.visibility="visible";
					document.getElementById("i31").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("a2").style="position:absolute; left:180px; top:292px;  visibility:visible;";
						setTimeout(function()
						{
							document.getElementById("a2").style="position:absolute; left:255px; top:292px;  visibility:visible;";
							setTimeout(function()
							{
								document.getElementById("a2").style="position:absolute; left:320px; top:292px;  visibility:visible;";
								energized();
							},1000);
						},1000);
					},1000);
				},1000);
			},1000);
		},1000);
	},1000);
}

function s1OnANDs2Off()
{
	c=2;
	initSet();
	document.getElementById("header").innerHTML="When S<sub>1</sub> is ON and S<sub>2</sub> is OFF, light doesn't glow";
	setTimeout(function()
	{
		document.getElementById("hp1").style.visibility="visible";
		document.getElementById("hp1").style.animation="moveHand 1.5s forwards";
		setTimeout(function()
		{
			document.getElementById("s1").style.animation="moveSwitch 0.75s forwards";
			setTimeout(function()
			{
				document.getElementById("i12").innerHTML="1";
				document.getElementById("i22").innerHTML="0";
				document.getElementById("i12").style.visibility="visible";
				document.getElementById("i22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("c1").style.visibility="visible";
					document.getElementById("c1").style.transformOrigin="left bottom";
					document.getElementById("c1").style.animation="rotateLineReverse 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("i11").innerHTML="open";
						document.getElementById("i21").innerHTML="closed";
						document.getElementById("i11").style.visibility="visible";
						document.getElementById("i21").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("i32").innerHTML="1";
							document.getElementById("i42").innerHTML="0";
							document.getElementById("i32").style.visibility="visible";
							document.getElementById("i42").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("c3").style.visibility="visible";
								document.getElementById("c3").style.transformOrigin="left bottom";
								document.getElementById("c3").style.animation="rotateLineForward 1.5s forwards";
								setTimeout(function()
								{
									document.getElementById("i41").innerHTML="open";
									document.getElementById("i31").innerHTML="closed";
									document.getElementById("i41").style.visibility="visible";
									document.getElementById("i31").style.visibility="visible";
									setTimeout(function()
									{
										deEnergized();
									},1000);
								},1550);
							},1000);
						},1000);
					},1550);
				},1000);
			},1500);
		},750);
	},1000);
}

function s1OffANDs2On()
{
	c=3;
	initSet();
	document.getElementById("header").innerHTML="When S<sub>1</sub> is OFF and S<sub>2</sub> is ON, light doesn't glow";
	setTimeout(function()
	{
		document.getElementById("hp2").style.visibility="visible";
		document.getElementById("hp2").style.animation="moveHand 1.5s forwards";
		setTimeout(function()
		{
			document.getElementById("s2").style.animation="moveSwitch 0.75s forwards";
			setTimeout(function()
			{
				document.getElementById("i12").innerHTML="0";
				document.getElementById("i22").innerHTML="1";
				document.getElementById("i12").style.visibility="visible";
				document.getElementById("i22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("c2").style.visibility="visible";
					document.getElementById("c2").style.transformOrigin="left bottom";
					document.getElementById("c2").style.animation="rotateLineReverse 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("i11").innerHTML="closed";
						document.getElementById("i21").innerHTML="open";
						document.getElementById("i11").style.visibility="visible";
						document.getElementById("i21").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("i32").innerHTML="0";
							document.getElementById("i42").innerHTML="1";
							document.getElementById("i32").style.visibility="visible";
							document.getElementById("i42").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("c4").style.visibility="visible";
								document.getElementById("c4").style.transformOrigin="left bottom";
								document.getElementById("c4").style.animation="rotateLineForward 1.5s forwards";
								setTimeout(function()
								{
									document.getElementById("i41").innerHTML="closed";
									document.getElementById("i31").innerHTML="open";
									document.getElementById("i41").style.visibility="visible";
									document.getElementById("i31").style.visibility="visible";
									deEnergized();
								},1750);
							},1000);
						},1000);
					},1550);
				},1000);
			},1500);
		},750);
	},1000);
}

function s1ANDs2On()
{
	c=4;
	initSet();
	document.getElementById("header").innerHTML="When S<sub>1</sub> is ON and S<sub>2</sub> is ON, light glows";
	setTimeout(function()
	{
		document.getElementById("hp1").style.visibility="visible";
		document.getElementById("hp1").style.animation="moveHand 1.5s forwards";
		document.getElementById("hp2").style.visibility="visible";
		document.getElementById("hp2").style.animation="moveHand 1.5s forwards";
		setTimeout(function()
		{
			document.getElementById("s1").style.animation="moveSwitch 0.75s forwards";
			document.getElementById("s2").style.animation="moveSwitch 0.75s forwards";
			setTimeout(function()
			{
				document.getElementById("i12").innerHTML="1";
				document.getElementById("i22").innerHTML="1";
				document.getElementById("i12").style.visibility="visible";
				document.getElementById("i22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("c1").style.visibility="visible";
					document.getElementById("c1").style.transformOrigin="left bottom";
					document.getElementById("c1").style.animation="rotateLineReverse 1.5s forwards";
					document.getElementById("c2").style.visibility="visible";
					document.getElementById("c2").style.transformOrigin="left bottom";
					document.getElementById("c2").style.animation="rotateLineReverse 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("i11").innerHTML="open";
						document.getElementById("i21").innerHTML="open";
						document.getElementById("i11").style.visibility="visible";
						document.getElementById("i21").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("i32").innerHTML="1";
							document.getElementById("i42").innerHTML="1";
							document.getElementById("i32").style.visibility="visible";
							document.getElementById("i42").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("c3").style.visibility="visible";
								document.getElementById("c3").style.transformOrigin="left bottom";
								document.getElementById("c3").style.animation="rotateLineForward 1.5s forwards";		
								document.getElementById("c4").style.visibility="visible";
								document.getElementById("c4").style.transformOrigin="left bottom";
								document.getElementById("c4").style.animation="rotateLineForward 1.5s forwards";
								setTimeout(function()
								{
									document.getElementById("i41").innerHTML="closed";
									document.getElementById("i31").innerHTML="closed";
									document.getElementById("i41").style.visibility="visible";
									document.getElementById("i31").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("a2").style="position:absolute; left:180px; top:362px; visibility:visible;";
										setTimeout(function()
										{
											document.getElementById("a2").style="position:absolute; left:255px; top:362px; visibility:visible;";
											setTimeout(function()
											{
												document.getElementById("a2").style="position:absolute; left:320px; top:362px; visibility:visible;";
												setTimeout(function()
												{
													document.getElementById("a2").style="position:absolute; left:338px; top:342px; visibility:visible; transform:rotate(-90deg);";
													energized();
												},1000);
											},1000);
										},1000);
									},1000);
								},1000);
							},1000);
						},1000);
					},1000);
				},1750);
			},1750);
		},750);
	},1000);
}

function energized()
{
	setTimeout(function()
	{
		document.getElementById("a3").style.visibility="hidden";
		document.getElementById("a2").style="position:absolute; left:380px; top:292px; visibility:visible";
		setTimeout(function()
		{
			document.getElementById("a2").style.visibility="hidden";
			document.getElementById("e1").style.visibility="visible";
			document.getElementById("e1").style.animation="enlarge 1s linear infinite";
			document.getElementById("o1").innerHTML="energized";
			document.getElementById("o1").style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById("a2").style="position:absolute; left:490px; top:292px; visibility:visible";
				setTimeout(function()
				{
					document.getElementById("a2").style.visibility="hidden";
					document.getElementById("lamp").style.visibility="visible";
					document.getElementById("a1").style.visibility="visible";
					document.getElementById("output").textContent="ON";
					document.getElementById("op").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("back").style.visibility="visible";
						document.getElementById("backArrow").style.visibility="visible";
						document.getElementById("backArrow2").style.visibility="visible";
					},1000);
				},500);
			},750);
		},1000);
	},1000);
}

function initSet()
{
	document.getElementById("2-1").style.visibility="visible";
	document.getElementById("2-2").style.visibility="visible";
	document.getElementById("2-3").style.visibility="visible";
	document.getElementById("header").style.visibility="visible";
	document.getElementById("s1").style.visibility="visible";
	document.getElementById("s2").style.visibility="visible";
	for(i=1;i<=10;i++)
	{
		document.getElementById("1-"+i).style.visibility="hidden";
	}
	document.getElementById("1-8").style.animation="";
	document.getElementById("c2").style.transformOrigin="left bottom";
	document.getElementById("c2").style.transform="rotate(28deg)";
	document.getElementById("c1").style.transformOrigin="left bottom";
	document.getElementById("c1").style.transform="rotate(28deg)";
	document.getElementById("c1").style.visibility="visible";
	document.getElementById("c2").style.visibility="visible";
}

function back()
{
	for(i=1;i<=10;i++)
	{
		document.getElementById("1-"+i).style.visibility="visible";
	}
	for(j=1;j<=2;j++)
	{
		document.getElementById("2-"+j).style.visibility="hidden";
		document.getElementById("s"+j).style.visibility="hidden";
		document.getElementById("hp"+j).style.visibility="hidden";
		document.getElementById("a"+j).style.visibility="hidden";
		document.getElementById("i1"+j).style.visibility="hidden";
		document.getElementById("i2"+j).style.visibility="hidden";
		document.getElementById("i3"+j).style.visibility="hidden";
		document.getElementById("i4"+j).style.visibility="hidden";
		document.getElementById("hp"+j).style.animation="";
		document.getElementById("s"+j).style.animation="";
	}
	document.getElementById("back").style.visibility="hidden";
	document.getElementById("backArrow").style.visibility="hidden";
	document.getElementById("backArrow2").style.visibility="hidden";
	document.getElementById("2-3").style.visibility="hidden";
	document.getElementById("header").style.visibility="hidden";
	document.getElementById("op").style.visibility="hidden";
	document.getElementById("o1").style.visibility="hidden";
	document.getElementById("e1").style.visibility="hidden";
	document.getElementById("lamp").style.visibility="hidden";
	document.getElementById("a2").style.left="240px";
	document.getElementById("a2").style.top="367.5px";
	document.getElementById("1-9").style.transformOrigin="left bottom";
	document.getElementById("1-9").style.transform="rotate(28deg)";
	document.getElementById("1-10").style.transformOrigin="left bottom";
	document.getElementById("1-10").style.transform="rotate(28deg)";
	for(k=1;k<=4;k++)
	{
		document.getElementById("c"+k).style.transformOrigin="";
		document.getElementById("c"+k).style.animation="";
		document.getElementById("c"+k).style.visibility="hidden";
		document.getElementById("c"+k).style.visibility="hidden";
	}
	arrowPoint();
}

function arrowPoint()
{
	if(c==4)
		document.getElementById("1-8").style.top="95px";
	if(c==1)
		document.getElementById("1-8").style.top="130px";
	if(c==2)
		document.getElementById("1-8").style.top="165px";
	if(c==3)
		document.getElementById("1-8").style.top="200px";
	document.getElementById("1-8").style.animation="point 0.75s linear infinite";
}

function deEnergized()
{
	setTimeout(function()
	{
		document.getElementById("o1").innerHTML="de-energized";
		document.getElementById("o1").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById("a1").style.visibility="visible";
			document.getElementById("op").style.visibility="visible";
			document.getElementById("output").textContent="OFF";
			setTimeout(function()
			{
				document.getElementById("back").style.visibility="visible";
				document.getElementById("backArrow").style.visibility="visible";
				document.getElementById("backArrow2").style.visibility="visible";
			},1000);
		},1000);
	},1000);
}