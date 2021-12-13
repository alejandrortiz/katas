
def run() -> None:
    print('PART A: {}'.format(result(content())))
    print('PART B: {}'.format(''))


def result(lines: list) -> int:
    numbers: list = [int(i) for i in lines[0].strip().split(',')];
    boards: list = build_boards(lines);
    matched: bool = False;
    
    for number in numbers:
        for board in boards:
            if 
            
            print(board);
            
    # print(boards);
                
    
    return 1;


def build_boards(lines: list) -> list:
    board: list = [];
    boards: list = [];
    
    for line in lines[2:]:
        formatted: str = line.strip();

        if len(formatted) == 0:
            boards.append(board);
            board = [];
        else:
            for i in formatted.split(' '): 
                if i.strip() != '':
                    board.append(int(i));
                    
    return boards;


def content() -> list:
    file = open('exec_04.txt', 'r');
    content: list = file.read().splitlines();
    file.close();
    
    return content;


run();