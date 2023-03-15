	function gel()
	{
		const tes1 = document.getElementById('titresecA');
		const tes2 = document.getElementById('titresecB')
		if(tes1.classList.contains('ap') && tes2.classList.contains('ap') )
		{
			tes1.classList.remove('ap');
			tes2.classList.remove('ap');
			const tes5 = document.getElementById('dqiB');
			const tes6 = document.getElementById('dqeB');
			const tes3 = document.getElementById('dqiA');
			const tes4 = document.getElementById('dqeA');

			if(tes3.classList.contains('ap') && tes4.classList.contains('ap') )
			{
				tes3.classList.remove('ap');
				tes4.classList.remove('ap');
			}
			if(tes5.classList.contains('ap') && tes6.classList.contains('ap') )
			{
				tes5.classList.remove('ap');
				tes6.classList.remove('ap');
			}
		}
		else
		{
			tes1.classList.add('ap');
			tes2.classList.add('ap');
			
		}
	}

	function ac()
	{
		const tes3 = document.getElementById('dqiA');
		const tes4 = document.getElementById('dqeA')
		if(tes3.classList.contains('ap') && tes4.classList.contains('ap') )
		{
			tes3.classList.remove('ap');
			tes4.classList.remove('ap');
		}
		else
		{
			tes3.classList.add('ap');
			tes4.classList.add('ap');
		} 
	}

	function ar()
	{
		const tes5 = document.getElementById('dqiB');
		const tes6 = document.getElementById('dqeB');
		if(tes5.classList.contains('ap') && tes6.classList.contains('ap') )
		{
			tes5.classList.remove('ap');
			tes6.classList.remove('ap');
		}
		else
		{
			tes5.classList.add('ap');
			tes6.classList.add('ap');
		} 
	}