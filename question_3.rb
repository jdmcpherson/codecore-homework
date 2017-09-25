def is_prime(num)
    value = Math::sqrt(num.to_f)

    prime_status = true

    for number in 2...value
        check = value/number
        if check % 1 === 0
            prime_status = false
        end
    end

    puts prime_status
end