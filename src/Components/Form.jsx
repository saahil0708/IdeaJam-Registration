import { useState, useEffect } from 'react';
import { 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Checkbox, 
  FormControlLabel, 
  Typography,
  IconButton,
  Tooltip,
  Snackbar,
  Alert
} from '@mui/material';
import Register from '@/Utils/RegisterNowButton';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiUsers, 
  FiAward, 
  FiClock, 
  FiCalendar,
  FiPlus,
  FiX,
  FiInfo
} from 'react-icons/fi';

const IdeaJamRegistration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    contactNumber: '',
    department: '',
    teamSize: '1',
    idea: '',
    terms: false,
    teamMembers: []
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Initialize team members array based on team size
    const size = parseInt(formData.teamSize);
    if (size > 1) {
      const neededMembers = size - 1;
      const currentMembers = formData.teamMembers.length;
      
      if (currentMembers < neededMembers) {
        // Add missing members
        const newMembers = [...formData.teamMembers];
        for (let i = currentMembers; i < neededMembers; i++) {
          newMembers.push({ name: '', email: '' });
        }
        setFormData(prev => ({ ...prev, teamMembers: newMembers }));
      } else if (currentMembers > neededMembers) {
        // Remove extra members
        setFormData(prev => ({
          ...prev,
          teamMembers: prev.teamMembers.slice(0, neededMembers)
        }));
      }
    } else {
      // Solo team - clear members
      if (formData.teamMembers.length > 0) {
        setFormData(prev => ({ ...prev, teamMembers: [] }));
      }
    }
  }, [formData.teamSize]);

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'leaderEmail':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'contactNumber':
        if (!/^[0-9]{10,15}$/.test(value)) {
          error = 'Invalid phone number';
        }
        break;
      case 'teamName':
        if (value.length < 3) {
          error = 'Team name too short';
        }
        break;
      case 'leaderName':
        if (value.length < 3) {
          error = 'Name too short';
        }
        break;
      case 'department':
        if (!value) {
          error = 'Please select department';
        }
        break;
      case 'idea':
        if (value.length < 20) {
          error = 'Please provide more details';
        }
        break;
      default:
        if (name.startsWith('teamMember') && value.length < 3) {
          error = 'Name too short';
        }
        if (name.endsWith('Email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    
    // Validate field
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index][field] = value;
    
    // Validate field
    const fieldName = `teamMember${index}${field}`;
    const error = validateField(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
    
    setFormData(prev => ({
      ...prev,
      teamMembers: updatedMembers
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Final validation
    let isValid = true;
    const newErrors = {};
    
    // Validate main fields
    ['teamName', 'leaderName', 'leaderEmail', 'contactNumber', 'department', 'idea'].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });
    
    // Validate team members
    formData.teamMembers.forEach((member, index) => {
      ['name', 'email'].forEach(field => {
        const fieldName = `teamMember${index}${field}`;
        const error = validateField(fieldName, member[field]);
        if (error) {
          newErrors[fieldName] = error;
          isValid = false;
        }
      });
    });
    
    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms';
      isValid = false;
    }
    
    setErrors(newErrors);
    
    if (isValid) {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector('[error]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const isFormValid = () => {
    return Object.values(errors).every(error => !error) && 
           formData.terms && 
           formData.teamName && 
           formData.leaderName && 
           formData.leaderEmail && 
           formData.contactNumber && 
           formData.department && 
           formData.idea;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 overflow-x-hidden">
      {/* Glowing background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#1cb683] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#1cb683] opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {/* Registration Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#1cb683]">
              IdeaJam <span className="text-white">2.0</span>
            </h1>
            <p className="text-gray-300">Register to showcase your innovative ideas</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                required
                fullWidth
                label="Team Name"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.teamName}
                helperText={errors.teamName || ' '}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#374151' },
                    '&:hover fieldset': { borderColor: '#1cb683' },
                    '&.Mui-focused fieldset': { borderColor: '#1cb683' },
                    color: 'white',
                    borderRadius: '0.45rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    fontFamily: 'Outfit, sans-serif',
                  }
                }}
              />

              <FormControl fullWidth>
                <InputLabel sx={{ 
                  color: 'white',
                  fontFamily: 'Outfit, sans-serif',
                  '&.Mui-focused': {
                    color: 'white',
                  },
                }}>
                  Department
                </InputLabel>
                <Select
                  required
                  label="Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  error={!!errors.department}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#374151',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1cb683',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1cb683',
                    },
                    color: 'white',
                    borderRadius: '0.45rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    fontFamily: 'Outfit, sans-serif',
                    '& .MuiSelect-icon': {
                      color: 'white',
                    }
                  }}
                >
                  <MenuItem value="Applied Science" className='font-[Outfit]'>Applied Science</MenuItem>
                  <MenuItem value="CSE" className='font-[Outfit]'>Computer Science (CSE)</MenuItem>
                  <MenuItem value="ME" className='font-[Outfit]'>Mechanical Engineering (ME)</MenuItem>
                  <MenuItem value="ECE" className='font-[Outfit]'>Electronics (ECE)</MenuItem>
                  <MenuItem value="CE" className='font-[Outfit]'>Civil Engineering (CE)</MenuItem>
                  <MenuItem value="BCA" className='font-[Outfit]'>BCA</MenuItem>
                  <MenuItem value="Pharmacy" className='font-[Outfit]'>Pharmacy</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                required
                fullWidth
                label="Leader Name"
                name="leaderName"
                value={formData.leaderName}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.leaderName}
                helperText={errors.leaderName || ' '}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#374151' },
                    '&:hover fieldset': { borderColor: '#1cb683' },
                    '&.Mui-focused fieldset': { borderColor: '#1cb683' },
                    color: 'white',
                    borderRadius: '0.45rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    fontFamily: 'Outfit, sans-serif',
                  }
                }}
              />

              <TextField
                required
                fullWidth
                label="Leader Email"
                name="leaderEmail"
                type="email"
                value={formData.leaderEmail}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.leaderEmail}
                helperText={errors.leaderEmail || ' '}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#374151' },
                    '&:hover fieldset': { borderColor: '#1cb683' },
                    '&.Mui-focused fieldset': { borderColor: '#1cb683' },
                    color: 'white',
                    borderRadius: '0.45rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    fontFamily: 'Outfit, sans-serif',
                  }
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                required
                fullWidth
                label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.contactNumber}
                helperText={errors.contactNumber || ' '}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#374151' },
                    '&:hover fieldset': { borderColor: '#1cb683' },
                    '&.Mui-focused fieldset': { borderColor: '#1cb683' },
                    color: 'white',
                    borderRadius: '0.45rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                    fontFamily: 'Outfit, sans-serif',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiFormHelperText-root': {
                    fontFamily: 'Outfit, sans-serif',
                  }
                }}
              />

              <FormControl fullWidth>
                <InputLabel sx={{ 
                  color: 'white',
                  fontFamily: 'Outfit, sans-serif',
                  '&.Mui-focused': {
                    color: 'white',
                  },
                }}>
                  Team Size
                </InputLabel>
                <Select
                  required
                  label="Team Size"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#374151',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1cb683',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1cb683',
                    },
                    color: 'white',
                    borderRadius: '0.45rem',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    fontFamily: 'Outfit, sans-serif',
                    '& .MuiSelect-icon': {
                      color: 'white',
                    }
                  }}
                >
                  <MenuItem value="1" className='font-[Outfit]'>Solo (1)</MenuItem>
                  <MenuItem value="2" className='font-[Outfit]'>2 Members</MenuItem>
                  <MenuItem value="3" className='font-[Outfit]'>3 Members</MenuItem>
                  <MenuItem value="4" className='font-[Outfit]'>4 Members</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Dynamic team member fields */}
            <AnimatePresence>
              {formData.teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center mt-4">
                    <Typography variant="subtitle2" className="text-[#1cb683]">
                      Team Member {index + 1}
                    </Typography>
                    {index === formData.teamMembers.length - 1 && (
                      <Tooltip title="Remove member">
                        <IconButton 
                          size="small" 
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            teamSize: (parseInt(prev.teamSize) - 1).toString()
                          }))}
                        >
                          <FiX className="text-red-400" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      fullWidth
                      label={`Member ${index + 1} Name`}
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                      variant="outlined"
                      error={!!errors[`teamMember${index}name`]}
                      helperText={errors[`teamMember${index}name`] || ' '}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#374151' },
                          '&:hover fieldset': { borderColor: '#1cb683' },
                          '&.Mui-focused fieldset': { borderColor: '#1cb683' },
                          color: 'white',
                          borderRadius: '0.45rem',
                          backgroundColor: 'rgba(31, 41, 55, 0.5)',
                          fontFamily: 'Outfit, sans-serif',
                        },
                        '& .MuiInputLabel-root': {
                          color: 'white',
                          fontFamily: 'Outfit, sans-serif',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'white',
                        },
                        '& .MuiFormHelperText-root': {
                          fontFamily: 'Outfit, sans-serif',
                        }
                      }}
                    />

                    <TextField
                      fullWidth
                      label={`Member ${index + 1} Email`}
                      type="email"
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                      variant="outlined"
                      error={!!errors[`teamMember${index}email`]}
                      helperText={errors[`teamMember${index}email`] || ' '}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#374151' },
                          '&:hover fieldset': { borderColor: '#1cb683' },
                          '&.Mui-focused fieldset': { borderColor: '#1cb683' },
                          color: 'white',
                          borderRadius: '0.45rem',
                          backgroundColor: 'rgba(31, 41, 55, 0.5)',
                          fontFamily: 'Outfit, sans-serif',
                        },
                        '& .MuiInputLabel-root': {
                          color: 'white',
                          fontFamily: 'Outfit, sans-serif',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'white',
                        },
                        '& .MuiFormHelperText-root': {
                          fontFamily: 'Outfit, sans-serif',
                        }
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {parseInt(formData.teamSize) < 4 && (
              <motion.div 
                className="flex justify-end"
                whileHover={{ scale: 1.02 }}
              >
                <Button
                  variant="outlined"
                  startIcon={<FiPlus />}
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    teamSize: (parseInt(prev.teamSize) + 1).toString()
                  }))}
                  sx={{
                    color: '#1cb683',
                    borderColor: '#1cb683',
                    '&:hover': {
                      borderColor: '#1cb683',
                      backgroundColor: 'rgba(28, 182, 131, 0.1)'
                    },
                    fontFamily: 'Outfit, sans-serif',
                    textTransform: 'none',
                    borderRadius: '0.45rem'
                  }}
                >
                  Add Member
                </Button>
              </motion.div>
            )}

            <TextField
              fullWidth
              variant="outlined"
              label="Brief Idea Description (Max 200 chars)"
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              required
              multiline
              rows={4}
              error={!!errors.idea}
              helperText={errors.idea || ' '}
              inputProps={{ maxLength: 200 }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#374151' },
                  '&:hover fieldset': { borderColor: '#1cb683' },
                  '&.Mui-focused fieldset': { borderColor: '#1cb683' },
                  color: 'white',
                  borderRadius: '0.45rem',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  fontFamily: 'Outfit, sans-serif',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                  fontFamily: 'Outfit, sans-serif',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white',
                },
                '& .MuiFormHelperText-root': {
                  fontFamily: 'Outfit, sans-serif',
                }
              }}
            />

            <div className="flex flex-col space-y-4">
              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    sx={{
                      color: '#1cb683',
                      '&.Mui-checked': {
                        color: '#1cb683',
                      },
                    }}
                  />
                }
                label={
                  <span className="text-gray-300">
                    I agree to the terms and conditions of IdeaJam 2.0
                  </span>
                }
              />

              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-1/2"
                >
                  <Register disabled={!isFormValid} onClick={() => {}} />
                </motion.div>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl overflow-hidden hidden lg:block"
        >
          <div className="relative h-full">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1cb683] rounded-full opacity-10 blur-xl"></div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1cb683] flex items-center">
              <FiAward className="mr-2" /> About IdeaJam 2.0
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-700 bg-opacity-40 p-4 rounded-xl border-l-4 border-[#1cb683]">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <FiClock className="mr-2 text-[#1cb683]" /> Event Timeline
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span><strong>Registration:</strong> Aug 1 - Aug 20</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span><strong>Round 1 - Idea Submission:</strong> Aug 25</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span><strong>Round 2 - Prototype Demo:</strong> Sep 10</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span><strong>Final Pitch:</strong> Sep 25</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 bg-opacity-40 p-4 rounded-xl border-l-4 border-[#1cb683]">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <FiUsers className="mr-2 text-[#1cb683]" /> Competition Rounds
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#1cb683]">1. Idea Submission</h4>
                    <p className="text-gray-300 text-sm">
                      Submit your innovative idea with a brief description. Judges will evaluate based on creativity, feasibility, and impact.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1cb683]">2. Prototype Development</h4>
                    <p className="text-gray-300 text-sm">
                      Shortlisted teams will develop a basic prototype or detailed plan of their solution with mentorship support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1cb683]">3. Final Pitch</h4>
                    <p className="text-gray-300 text-sm">
                      Present your solution to a panel of industry experts. Evaluation based on implementation, presentation, and business potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 bg-opacity-40 p-4 rounded-xl border-l-4 border-[#1cb683]">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <FiCalendar className="mr-2 text-[#1cb683]" /> Prizes & Benefits
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span>💰 <strong>Cash prizes</strong> up to $10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span>🏆 <strong>Incubation support</strong> for top 3 ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span>🤝 <strong>Networking</strong> with industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#1cb683] rounded-full mt-2 mr-2"></span>
                    <span>📜 <strong>Certificates</strong> for all participants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles for extra effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#1cb683] opacity-20"
            style={{
              width: Math.random() * 10 + 2 + 'px',
              height: Math.random() * 10 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Success notification */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success"
          sx={{ 
            width: '100%',
            backgroundColor: '#1cb683',
            color: 'white',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          Registration successful! We've sent a confirmation to your email.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default IdeaJamRegistration;