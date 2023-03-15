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

	function of()
	{
		const tes7 = document.getElementById('normal-page');
		const tes8 = document.getElementById('page-modif');
		tes7.classList.remove('ap');
		tes8.classList.add('ap');

	}

	function ofA()
	{
		const tes9 = document.getElementById('part-form');
		const tes10 = document.getElementById('part-formA');
		const tes11 = document.getElementById('part-tableA');
		tes9.classList.remove('ap');
		tes10.classList.add('ap');
		tes11.classList.add('ap');

	}

	function ofB()
	{
		const tes12 = document.getElementById('normal-page');
		const tes13 = document.getElementById('page-modifA');
		tes12.classList.remove('ap');
		tes13.classList.add('ap');

	}
	function ofC()
	{
		const tes14 = document.getElementById('normal-page');
		const tes15 = document.getElementById('page-modifB');
		tes14.classList.remove('ap');
		tes15.classList.add('ap');

	}

	function ofD()
	{
		const tes16 = document.getElementById('part-form');
		const tes17 = document.getElementById('part-formA');
		const tes18 = document.getElementById('part-formB');
		const tes19 = document.getElementById('part-tableB');
		tes16.classList.remove('ap');
		tes17.classList.remove('ap');
		tes18.classList.add('ap');
		tes19.classList.add('ap');

	}

	function ofE()
	{
		const tes20 = document.getElementById('normal-page');
		const tes21 = document.getElementById('page-modifC');
		tes20.classList.remove('ap');
		tes21.classList.add('ap');

	}

	function ofF()
	{
		const tes22 = document.getElementById('part-form');
		const tes23 = document.getElementById('part-formC');
		const tes24 = document.getElementById('part-tableC');
		tes22.classList.remove('ap');
		tes23.classList.add('ap');
		tes24.classList.add('ap');
	}

	function ofG()
	{
		const tes24 = document.getElementById('normal-page');
		const tes25 = document.getElementById('page-modifE');
		tes24.classList.remove('ap');
		tes25.classList.add('ap');
	}

	function ofH()
	{
		const tes26 = document.getElementById('normal-page');
		const tes27 = document.getElementById('page-modifD');
		tes26.classList.remove('ap');
		tes27.classList.add('ap');
	}

	function ofI()
	{
		const tes28 = document.getElementById('normal-page');
		const tes29 = document.getElementById('page-modifF');
		tes28.classList.remove('ap');
		tes29.classList.add('ap');
	}

	function ofJ()
	{
		const tes30 = document.getElementById('part-form');
		const tes31 = document.getElementById('part-formD');
		tes30.classList.remove('ap');
		tes31.classList.add('ap');
	}

	function ofK()
	{
		const tes32 = document.getElementById('normal-page');
		const tes33 = document.getElementById('page-modifG');
		tes32.classList.remove('ap');
		tes33.classList.add('ap');
	}

	function ofL()
	{
		const tes34 = document.getElementById('normal-page');
		const tes35 = document.getElementById('page-modifH');
		tes34.classList.remove('ap');
		tes35.classList.add('ap');
	}

	function ofM()
	{
		const tes36 = document.getElementById('part-form');
		const tes37 = document.getElementById('part-formE');
		tes36.classList.remove('ap');
		tes37.classList.add('ap');
	}

	function ofN()
	{
		const tes38 = document.getElementById('normal-page');
		const tes39 = document.getElementById('page-modifI');
		tes38.classList.remove('ap');
		tes39.classList.add('ap');
	}

	function ofO()
	{
		const tes40 = document.getElementById('normal-page');
		const tes41 = document.getElementById('page-modifJ');
		tes40.classList.remove('ap');
		tes41.classList.add('ap');
	}

	function ofP()
	{
		const tes42 = document.getElementById('normal-page');
		const tes43 = document.getElementById('page-modifK');
		tes42.classList.remove('ap');
		tes43.classList.add('ap');
	}

	function ofQ()
	{
		const tes44 = document.getElementById('normal-page');
		const tes45 = document.getElementById('page-modifL');
		tes44.classList.remove('ap');
		tes45.classList.add('ap');
	}

	function ofR()
	{
		const tes46 = document.getElementById('normal-page');
		const tes47 = document.getElementById('page-modifM');
		tes46.classList.remove('ap');
		tes47.classList.add('ap');
	}

	function ofS()
	{
		const tes48 = document.getElementById('part-form');
		const tes49 = document.getElementById('part-formF');
		tes48.classList.remove('ap');
		tes49.classList.add('ap');
	}

	function ofR()
	{
		const tes46 = document.getElementById('normal-page');
		const tes47 = document.getElementById('page-modifM');
		tes46.classList.remove('ap');
		tes47.classList.add('ap');
	}

	function ofT()
	{
		const tes48 = document.getElementById('normal-page');
		const tes49 = document.getElementById('page-modifN');
		tes48.classList.remove('ap');
		tes49.classList.add('ap');
	}

	function ofU()
	{
		const tes50 = document.getElementById('normal-page');
		const tes51 = document.getElementById('page-modifO');
		tes50.classList.remove('ap');
		tes51.classList.add('ap');
	}

	function ofV()
	{
		const tes52 = document.getElementById('normal-page');
		const tes53 = document.getElementById('page-modifP');
		tes52.classList.remove('ap');
		tes53.classList.add('ap');
	}

	function ofW()
	{
		const tes54 = document.getElementById('part-form');
		const tes55 = document.getElementById('part-formG');
		tes54.classList.remove('ap');
		tes55.classList.add('ap');
	}

	function ofX()
	{
		const tes56 = document.getElementById('normal-page');
		const tes57 = document.getElementById('page-modifQ');
		tes56.classList.remove('ap');
		tes57.classList.add('ap');
	}

	function ofY()
	{
		const tes58 = document.getElementById('normal-page');
		const tes59 = document.getElementById('page-modifR');
		tes58.classList.remove('ap');
		tes59.classList.add('ap');
	}

	function ofZ()
	{
		const tes60 = document.getElementById('normal-page');
		const tes61 = document.getElementById('page-modifS');
		tes60.classList.remove('ap');
		tes61.classList.add('ap');
	}

	function ofA1()
	{
		const tes62 = document.getElementById('normal-page');
		const tes63 = document.getElementById('page-modifT');
		tes62.classList.remove('ap');
		tes63.classList.add('ap');
	}

	function ofA2()
	{
		const tes64 = document.getElementById('part-form');
		const tes65 = document.getElementById('part-formH');
		tes64.classList.remove('ap');
		tes65.classList.add('ap');
	}

	function ofA3()
	{
		const tes66 = document.getElementById('normal-page');
		const tes67 = document.getElementById('page-modifU');
		tes66.classList.remove('ap');
		tes67.classList.add('ap');
	}
	function ofA4()
	{
		const tes68 = document.getElementById('normal-page');
		const tes69 = document.getElementById('page-modifV');
		tes68.classList.remove('ap');
		tes69.classList.add('ap');
	}
	function ofA5()
	{
		const tes70 = document.getElementById('normal-page');
		const tes71 = document.getElementById('page-modifW');
		tes70.classList.remove('ap');
		tes71.classList.add('ap');
	}
	function ofA6()
	{
		const tes72 = document.getElementById('normal-page');
		const tes73 = document.getElementById('page-modifX');
		tes72.classList.remove('ap');
		tes73.classList.add('ap');
	}

	function ofA7()
	{
		const tes74 = document.getElementById('part-form');
		const tes75 = document.getElementById('part-formI');
		tes74.classList.remove('ap');
		tes75.classList.add('ap');
	}

	function ofA8()
	{
		const tes76 = document.getElementById('normal-page');
		const tes77 = document.getElementById('page-modifY');
		tes76.classList.remove('ap');
		tes77.classList.add('ap');
	}

	function ofA9()
	{
		const tes78 = document.getElementById('normal-page');
		const tes79 = document.getElementById('page-modifA1');
		tes78.classList.remove('ap');
		tes79.classList.add('ap');
	}

	function ofA10()
	{
		const tes80 = document.getElementById('normal-page');
		const tes81 = document.getElementById('page-modifA2');
		tes80.classList.remove('ap');
		tes81.classList.add('ap');
	}

	function ofA11()
	{
		const tes80 = document.getElementById('normal-page');
		const tes81 = document.getElementById('page-modifA3');
		tes80.classList.remove('ap');
		tes81.classList.add('ap');
	}

	function ofA12()
	{
		const tes80 = document.getElementById('normal-page');
		const tes81 = document.getElementById('page-modifA4');
		tes80.classList.remove('ap');
		tes81.classList.add('ap');
	}

	function ofA13()
	{
		const tes82 = document.getElementById('normal-page');
		const tes83 = document.getElementById('page-modifA5');
		tes82.classList.remove('ap');
		tes83.classList.add('ap');
	}

	function ofA14()
	{
		const tes84 = document.getElementById('normal-page');
		const tes85 = document.getElementById('page-modifA6');
		tes84.classList.remove('ap');
		tes85.classList.add('ap');
	}

	function ofA15()
	{
		const tes86 = document.getElementById('normal-page');
		const tes87 = document.getElementById('page-modifA7');
		tes86.classList.remove('ap');
		tes87.classList.add('ap');
	}

	function ofA16()
	{
		const tes86 = document.getElementById('part-form');
		const tes87 = document.getElementById('part-formJ');
		tes86.classList.remove('ap');
		tes87.classList.add('ap');
	}
	
	function ofA17()
	{
		const tes88 = document.getElementById('normal-page');
		const tes89 = document.getElementById('page-modifZ');
		tes88.classList.remove('ap');
		tes89.classList.add('ap');
	}

	function ofA18()
	{
		const tes90 = document.getElementById('normal-page');
		const tes91 = document.getElementById('page-modifA8');
		tes90.classList.remove('ap');
		tes91.classList.add('ap');
	}

	function ofA19()
	{
		const tes92 = document.getElementById('normal-page');
		const tes93 = document.getElementById('page-modifA9');
		tes92.classList.remove('ap');
		tes93.classList.add('ap');
	}

	function ofA20()
	{
		const tes92 = document.getElementById('part-form');
		const tes93 = document.getElementById('part-formL');
		tes92.classList.remove('ap');
		tes93.classList.add('ap');
	}

	function ofA21()
	{
		const tes94 = document.getElementById('normal-page');
		const tes95 = document.getElementById('page-modifA10');
		tes94.classList.remove('ap');
		tes95.classList.add('ap');
	}

	function ofA22()
	{
		const tes96 = document.getElementById('normal-page');
		const tes97 = document.getElementById('page-modifA11');
		tes96.classList.remove('ap');
		tes97.classList.add('ap');
	}

	function ofA23()
	{
		const tes92 = document.getElementById('part-form');
		const tes93 = document.getElementById('part-formM');
		tes92.classList.remove('ap');
		tes93.classList.add('ap');
	}
	function ret()
	{
		const tes7 = document.getElementById('normal-page');
		const tes8 = document.getElementById('page-modif');
		tes8.classList.remove('ap');
		tes7.classList.add('ap');
	}

	function retA()
	{
		const tes12 = document.getElementById('normal-page');
		const tes13 = document.getElementById('page-modifA');
		tes13.classList.remove('ap');
		tes12.classList.add('ap');
	}

	function retB()
	{
		const tes14 = document.getElementById('normal-page');
		const tes15 = document.getElementById('page-modifB');
		tes15.classList.remove('ap');
		tes14.classList.add('ap');
	}

	function retC()
	{
		const tes16 = document.getElementById('normal-page');
		const tes17 = document.getElementById('page-modifC');
		const tes18 = document.getElementById('part-formB');
		const tes19 = document.getElementById('part-tableB');

		tes17.classList.remove('ap');
		tes16.classList.add('ap');
		tes18.classList.add('ap');
		tes19.classList.add('ap');
	}

	function retD()
	{
		const tes2O = document.getElementById('normal-page');
		const tes21 = document.getElementById('page-modifC');
		const tes22 = document.getElementById('part-formB');
		const tes23 = document.getElementById('part-tableB');

		tes17.classList.remove('ap');
		tes16.classList.add('ap');
		tes18.classList.add('ap');
		tes19.classList.add('ap');
	}

	function retE()
	{
		const tes24 = document.getElementById('page-modifE');
		const tes25 = document.getElementById('normal-page');
		const tes26 = document.getElementById('part-formC');
		const tes27 = document.getElementById('part-tableC');

		tes24.classList.remove('ap');
		tes25.classList.add('ap');
		tes26.classList.add('ap');
		tes27.classList.add('ap');
	}

	function retG()
	{
		const tes28 = document.getElementById('page-modifD');
		const tes29 = document.getElementById('normal-page');
		const tes30 = document.getElementById('part-formC');
		const tes31 = document.getElementById('part-tableC');

		tes28.classList.remove('ap');
		tes29.classList.add('ap');
		tes30.classList.add('ap');
		tes31.classList.add('ap');
	}

	function retF()
	{
		const tes32 = document.getElementById('page-modifF');
		const tes33 = document.getElementById('normal-page');
		const tes34 = document.getElementById('part-formC');
		const tes35 = document.getElementById('part-tableC');

		tes32.classList.remove('ap');
		tes33.classList.add('ap');
		tes34.classList.add('ap');
		tes35.classList.add('ap');
	}

	function retH()
	{
		const tes36 = document.getElementById('normal-page');
		const tes37 = document.getElementById('page-modifG');
		const tes38 =  document.getElementById('page-modifH');
		const tes39 = document.getElementById('part-formD')
		tes36.classList.add('ap');
		tes37.classList.remove('ap');
		tes38.classList.remove('ap');
		tes39.classList.add('ap')
	}

	function retI()
	{
		const tes40 = document.getElementById('normal-page');
		const tes41 = document.getElementById('page-modifI');
		const tes42 = document.getElementById('page-modifJ');
		const tes43 = document.getElementById('page-modifK');
		const tes44 = document.getElementById('part-formE')

		tes41.classList.remove('ap');
		tes42.classList.remove('ap');
		tes43.classList.remove('ap');
		tes40.classList.add('ap');
		tes44.classList.add('ap');
	}

	function retJ()
	{
		const tes45 = document.getElementById('normal-page');
		const tes46 = document.getElementById('page-modifL');
		const tes47 = document.getElementById('page-modifM');
		const tes48 = document.getElementById('part-formF')

		tes46.classList.remove('ap');
		tes47.classList.remove('ap');
		tes45.classList.add('ap');
		tes48.classList.add('ap');
	}

	function retK()
	{
		const tes49 = document.getElementById('normal-page');
		const tes50 = document.getElementById('page-modifN');
		const tes51 = document.getElementById('page-modifO');
		const tes52 = document.getElementById('page-modifP');
		const tes53 = document.getElementById('part-formG')

		tes50.classList.remove('ap');
		tes51.classList.remove('ap');
		tes52.classList.remove('ap');
		tes49.classList.add('ap');
		tes53.classList.add('ap');
	}

	function retL()
	{
		const tes54 = document.getElementById('normal-page');
		const tes55 = document.getElementById('page-modifQ');
		const tes56 = document.getElementById('page-modifR');
		const tes57 = document.getElementById('page-modifS');
		const tes58 = document.getElementById('page-modifT');
		const tes59 = document.getElementById('part-formH')

		tes55.classList.remove('ap');
		tes56.classList.remove('ap');
		tes57.classList.remove('ap');
		tes58.classList.remove('ap');
		tes54.classList.add('ap');
		tes59.classList.add('ap');
	}

	function retM()
	{
		const tes60 = document.getElementById('normal-page');
		const tes61 = document.getElementById('page-modifU');
		const tes62 = document.getElementById('page-modifV');
		const tes63 = document.getElementById('page-modifW');
		const tes64 = document.getElementById('page-modifX');
		const tes65 = document.getElementById('part-formI')

		tes61.classList.remove('ap');
		tes62.classList.remove('ap');
		tes63.classList.remove('ap');
		tes64.classList.remove('ap');
		tes60.classList.add('ap');
		tes65.classList.add('ap');
	}

	function retN()
	{
		const tes60 = document.getElementById('normal-page');
		const tes61 = document.getElementById('page-modifY');
		const tes62 = document.getElementById('page-modifA1');
		const tes63 = document.getElementById('page-modifA2');
		const tes64 = document.getElementById('page-modifA3');
		const tes65 = document.getElementById('page-modifA4');
		const tes66 = document.getElementById('page-modifA5');
		const tes67 = document.getElementById('page-modifA6');
		const tes68 = document.getElementById('page-modifA7');
		const tes69 = document.getElementById('part-formJ')

		tes61.classList.remove('ap');
		tes62.classList.remove('ap');
		tes63.classList.remove('ap');
		tes64.classList.remove('ap');
		tes65.classList.remove('ap');
		tes66.classList.remove('ap');
		tes67.classList.remove('ap');
		tes68.classList.remove('ap');
		tes60.classList.add('ap');
		tes69.classList.add('ap');
	}

	function retO()
	{
		const tes60 = document.getElementById('normal-page');
		const tes61 = document.getElementById('page-modifZ');
		const tes62 = document.getElementById('page-modifA8');
		const tes63 = document.getElementById('page-modifA9');
		const tes65 = document.getElementById('part-formL')

		tes61.classList.remove('ap');
		tes62.classList.remove('ap');
		tes63.classList.remove('ap');
		tes60.classList.add('ap');
		tes65.classList.add('ap');
	}

	function retP()
	{
		const tes60 = document.getElementById('normal-page');
		const tes61 = document.getElementById('page-modifA10');
		const tes62 = document.getElementById('page-modifA11');
		const tes65 = document.getElementById('part-formM')

		tes61.classList.remove('ap');
		tes62.classList.remove('ap');
		tes60.classList.add('ap');
		tes65.classList.add('ap');
	}
