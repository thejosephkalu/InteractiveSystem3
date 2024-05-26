int ledPin = 13; // This defines the LED pin
int inputPin = 8; // This defines the PIR sensor pin
int pirState = LOW; // This variable store PIR state
int val = 0; // This variable store the sensor value
int pinSpeaker = 7; // Defines the Speaker pin

// The Setup function runs once the program starts
void setup() 
{
pinMode(ledPin, OUTPUT); // Sets the LED pin as an output
pinMode(inputPin, INPUT); // Sets the PIR sensor pin as input
Serial.begin(9600);
}


// The main loop to run repeatedly after setup
void loop()
{
val = digitalRead(inputPin); // This reads the PIR sensor value
if (val == HIGH) // If it reads high, motion is detected
{ 
digitalWrite(ledPin, HIGH); // This turns the LED on when a motion is detected
playTone(300, 160); // This defines the tone playing on the speaker
delay(150); // It waits for 150 milliseconds

if (pirState == LOW)
{
Serial.println("Motion detected!"); // This prints "Motion detected!" to the serial monitor 
pirState = HIGH; // Updates the PIR state to be high
}
}
 else // If no motion is detected
{
digitalWrite(ledPin, LOW); // This turns off the LED
playTone(0, 0); // This stops the speaker
delay(300); // It delays for 300 milliseconds

if (pirState == HIGH)
{
Serial.println("Motion ended!");
pirState = LOW;
}
}
}

// This function will play a tone on the speaker
void playTone(long duration, int freq) 
{
duration *= 1000;
int period = (1.0 / freq) * 1000000;
long elapsed_time = 0;
while (elapsed_time < duration) 
{
digitalWrite(pinSpeaker,HIGH); // Turns on the speaker
delayMicroseconds(period / 2); // Waits for half the period set
digitalWrite(pinSpeaker, LOW); // Turns off the speaker
delayMicroseconds(period / 2); // Waits for the other half of the period
elapsed_time += (period);
}
}

