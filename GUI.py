import eel

def start_eel(develop):
    if develop:
        directory = 'src'
        app = None
        page = {'port': 3000}
    else:
        directory = 'build'
        app = 'chrome-app'
        page = 'index.html'

    eel.init(directory, ['.tsx', '.ts', '.jsx', '.js', '.html', '.css'])
    eel.start('index.html')

@eel.expose
def test_py():
    return "test"

if __name__ == '__main__':
    import sys
    start_eel(develop=len(sys.argv) == 2)