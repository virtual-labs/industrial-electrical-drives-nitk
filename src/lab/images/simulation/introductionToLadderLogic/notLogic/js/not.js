var c=0;

function closeHandler()
{
	c=2;
	initSet();
	document.getElementById("header").innerHTML="When switch is ON, light doesn't glow";
	document.getElementById("c1").style.visibility="visible";
	document.getElementById("c1").style.transformOrigin="left bottom";
	document.getElementById("c1").style.transform="rotate(28deg)";
	setTimeout(function()
	{
		document.getElementById("hp1").style.visibility="visible";
		document.getElementById("hp1").style.animation="moveHand 1.5s forwards";
		setTimeout(function()
		{
			document.getElementById("s1").style.animation="moveSwitch 0.75s forwards";
			setTimeout(function()
			{
				document.getElementById("c1").style.visibility="visible";
				document.getElementById("c1").style.transformOrigin="left bottom";
				document.getElementById("c1").style.animation="rotateLine 2s reverse";
				setTimeout(function()
				{
					document.getElementById("c1").style.visibility="hidden";
					setTimeout(function()
					{
						document.getElementById("i11").innerHTML="open";
						document.getElementById("i11").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("o1").innerHTML="de-energized";
							document.getElementById("o1").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("a1").style.visibility="visible";
								document.getElementById("output").textContent="OFF";
								document.getElementById("op").style.visibility="visible";
								setTimeout(function()
								{
									document.getElementById("back").style.visibility="visible";
									document.getElementById("backArrow").style.visibility="visible";
									document.getElementById("backArrow2").style.visibility="visible";
								},500);
							},1000);
						},1000);
					},1000);
				},2000);
			},2000);
		},500);
	},1000);
}

function openHandler()
{
	c=1;
	initSet();
	document.getElementById("header").innerHTML="When switch is OFF, light glows";
	setTimeout(function()
	{
		document.getElementById("c1").style.visibility="visible";
		document.getElementById("c1").style.transformOrigin="left bottom";
		document.getElementById("c1").style.animation="rotateLine 1.5s forwards";
		setTimeout(function()
		{
			document.getElementById("i11").innerHTML="closed";
			document.getElementById("i11").style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById("a2").style="position:absolute; left:370px; top:367.5px; visibility:visible";
				setTimeout(function()
				{
					document.getElementById("e1").style.visibility="visible";
					document.getElementById("e1").style.animation="enlarge 1s linear infinite";
					document.getElementById("o1").innerHTML="energized";
					document.getElementById("o1").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("a2").style="position:absolute; left:460px; top:367.5px; visibility:visible";
						setTimeout(function()
						{
							document.getElementById("lamp").style.visibility="visible";
							document.getElementById("a1").style.visibility="visible";
							document.getElementById("output").textContent="ON";
							document.getElementById("op").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("back").style.visibility="visible";
								document.getElementById("backArrow").style.visibility="visible";
								document.getElementById("backArrow2").style.visibility="visible";
							},1200);
						},1000);
					},1000);
				},1000);
			},1000);
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
	for(i=1;i<=7;i++)
	{
		document.getElementById("1-"+i).style.visibility="hidden";
	}
	// document.getElementById("1-8").style.animation="";
}

function back()
{
	for(i=1;i<=7;i++)
	{
		document.getElementById("1-"+i).style.visibility="visible";
	}
	for(j=1;j<=1;j++)
	{
		document.getElementById("2-"+j).style.visibility="hidden";
		document.getElementById("s"+j).style.visibility="hidden";
		document.getElementById("hp"+j).style.visibility="hidden";
		document.getElementById("a"+j).style.visibility="hidden";
		document.getElementById("i1"+j).style.visibility="hidden";
		document.getElementById("c"+j).style.visibility="hidden";
		document.getElementById("hp"+j).style.animation="";
		document.getElementById("s"+j).style.animation="";
		document.getElementById("c"+j).style.transformOrigin="";
		document.getElementById("c"+j).style.animation="";
	}
	document.getElementById("a2").style.visibility="hidden";
	document.getElementById("back").style.visibility="hidden";
	document.getElementById("backArrow").style.visibility="hidden";
	document.getElementById("backArrow2").style.visibility="hidden";
	document.getElementById("2-2").style.visibility="hidden";
	document.getElementById("2-3").style.visibility="hidden";
	document.getElementById("header").style.visibility="hidden";
	document.getElementById("op").style.visibility="hidden";
	document.getElementById("o1").style.visibility="hidden";
	document.getElementById("e1").style.visibility="hidden";
	document.getElementById("lamp").style.visibility="hidden";
	arrowPoint();
}

function arrowPoint()
{
	if(c==2)
		document.getElementById("1-7").style.top="142.5px";
	if(c==1)
		document.getElementById("1-7").style.top="97px";
}