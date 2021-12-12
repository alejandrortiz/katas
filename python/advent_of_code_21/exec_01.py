

def run() -> None:
    print('PART A: {}'.format(counter(content())));
    print('PART B: {}'.format(counter(sum_content_window(content()))));


def content() -> list:
    file = open('exec_01.txt', 'r');
    content = file.read().splitlines();
    file.close();
    
    return content;


def counter(numbers: list) -> int:
    counter = 0;

    for index, number in enumerate(numbers):   
        if index + 1 < len(numbers) and format_number(number) < format_number(numbers[index + 1]):
            counter = counter + 1;
    
    return counter;


def sum_content_window(numbers: list) -> list:
    list = [];
    
    for index, number in enumerate(numbers):
        if int(index) + 2 >= len(numbers):
            break;
        
        new_number = format_number(number) + format_number(numbers[index + 1]) + format_number(numbers[index + 2]);
            
        list.append(str(new_number));
        
    return list;


def format_number(number) -> int:
    return int(number.strip());


run();