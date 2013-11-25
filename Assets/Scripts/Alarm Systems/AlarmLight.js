#pragma strict

public var fadeSpeed : float = 2f;
public var highIntensity : float = 2f;
public var lowIntensity : float = .5f;
public var changeMargin : float = .2f;
public var alarmOn : boolean;


private var targetIntensity : float;

function awake()
{
	light.intensity = 0f;
	targetIntensity = highIntensity;
}

function Update () {

	if(alarmOn) {
		light.intensity = Mathf.Lerp(light.intensity, targetIntensity, fadeSpeed * Time.deltaTime);
		CheckTargetIntensity();
	}
	else
		light.intensity = Mathf.Lerp(light.intensity, 0f, fadeSpeed * Time.deltaTime);
	

}

function CheckTargetIntensity () {
	if(Mathf.Abs(targetIntensity - light.intensity) < changeMargin) {
		if(targetIntensity == highIntensity)
			targetIntensity = lowIntensity;
		else
			targetIntensity = highIntensity;
	}
}

