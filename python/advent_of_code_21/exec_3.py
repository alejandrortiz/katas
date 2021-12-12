import operator;

def run() -> None:
    print('PART A: {}'.format(gamma_epsilon(content())))
    print('PART B: {}'.format(oxigen_co2(content())))


def gamma_epsilon(numbers: list) -> int:
    gamma_bin: str = '';
    epsilon_bin: str = '';
    
    for position in range(len(format_line(numbers[0]))):
        bigger: str = number_by_position(position, numbers);
        
        gamma_bin += bigger;
        epsilon_bin += '0' if bigger == '1' else '1';
    
    return int(gamma_bin, 2) * int(epsilon_bin, 2);


def oxigen_co2(numbers: list) -> int:
    oxigen_bin: str = find_number(numbers, operator.ge);
    co2_bin: str = find_number(numbers, operator.lt);
    
    return int(oxigen_bin, 2) * int(co2_bin, 2);


def find_number(numbers: list, op: operator, position: int = 0):
    found: str = number_by_position(position, numbers, op);
    
    filtered: list = list(filter(lambda number: number[position] == found, numbers));
    
    if len(filtered) == 1: return filtered[0];
    else: return find_number(filtered, op, position + 1);


def number_by_position(position: int, numbers: list, op = operator.gt) -> str:
    one_counter: int = 0;
    zero_counter: int = 0;
    
    for number in numbers:
        if int(format_line(number)[position]) == 1: one_counter += 1;
        else: zero_counter += 1;
    
    return '1' if op(one_counter, zero_counter) else '0';
    

def format_line(line: str) -> str:
    return line.strip();


def content() -> list:
    file = open('exec_3b.txt', 'r');
    content: list = file.read().splitlines();
    file.close();
    
    return content;


run();