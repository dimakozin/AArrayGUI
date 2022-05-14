import sys
import eel
import serial

BAUDRATE = 9600

ser = serial.Serial('/dev/ttyUSB0', BAUDRATE)

@eel.expose
def blink_led_py():
    ser.write(b'TEST')

def start_eel(develop):
    """Start Eel with either production or development configuration."""

    if develop:
        directory = 'src'
        app = None
        page = {'port': 3000}
    else:
        directory = 'build'
        app = 'chrome-app'
        page = 'index.html'

    eel.init(directory, ['.tsx', '.ts', '.jsx', '.js', '.html'])

    eel_kwargs = dict(
        host='localhost',
        port=8080,
        size=(1280, 800),
    )
    try:
        eel.start(page)
        print("App is started...")
    except EnvironmentError:
        print("some error")

if __name__ == '__main__':
    start_eel(develop=len(sys.argv) == 2)
