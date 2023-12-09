#include <iostream>

int main()
{
	int x {};
	int y {};
	std::cout << "Please enter a number:\n";
	std::cin >> x;
	std::cout << "Please enter a second number:\n";
	std::cin >> y;
	std::cout << x << " + " << y << " is " << x + y << "." << '\n';
	std::cout << x << " - " << y << " is " << x - y << "." << '\n';
	return 0;
}
