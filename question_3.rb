def is_prime(num)
    value = Math::sqrt(num.to_f)
    
    for number in 2...value
        check = value/number
        if check % 1 === 0
            puts false
        end
    end

    puts true
end
