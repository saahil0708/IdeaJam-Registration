'use client';

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
  Snackbar,
  Alert,
} from '@mui/material';
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
  FiInfo,
  FiLink,
  FiUpload,
  FiDollarSign,
  FiBriefcase,
  FiShield
} from 'react-icons/fi';
import axios from 'axios';
import GlassCard from './Glasscard';
import SaveIcon from '@mui/icons-material/Save';

interface TeamMember {
  name: string;
  email: string;
}

interface FormData {
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  contactNumber: string;
  department: string;
  teamSize: string;
  description: string;
  pptLink: string;
  terms: boolean;
  teamMembers: TeamMember[];
}

const IdeaJamRegistration = () => {
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    contactNumber: '',
    department: '',
    teamSize: '6',
    description: '',
    pptLink: '',
    terms: false,
    teamMembers: Array(5).fill(0).map(() => ({ name: '', email: '' })) // <-- FIXED: unique objects
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Always keep 5 unique members
    if (formData.teamMembers.length !== 5) {
      setFormData(prev => ({
        ...prev,
        teamMembers: Array(5).fill(0).map(() => ({ name: '', email: '' })) // <-- FIXED
      }));
    }
  }, [formData.teamMembers.length]);

  const validateField = (name: string, value: string) => {
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
      case 'description':
        if (value.length < 20) {
          error = 'Please provide more details';
        }
        break;
      case 'pptLink':
        if (value && !/^(http|https):\/\/[^ "]+$/.test(value)) {
          error = 'Invalid URL format';
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

  const handleChange = (e: any) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

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

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index][field] = value;

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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let isValid = true;
    const newErrors: Record<string, string> = {};

    ['teamName', 'leaderName', 'leaderEmail', 'contactNumber', 'department', 'description'].forEach(field => {
      const error = validateField(field, formData[field as keyof FormData] as string);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    formData.teamMembers.forEach((member, index) => {
      (['name', 'email'] as Array<keyof TeamMember>).forEach(field => {
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
      try {
        await axios.post(
          'https://idea-jam-server.vercel.app/teams',
          formData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        setShowSuccess(true);
        setFormData({
          teamName: '',
          leaderName: '',
          leaderEmail: '',
          contactNumber: '',
          department: '',
          teamSize: '6',
          description: '',
          pptLink: '',
          terms: false,
          teamMembers: Array(5).fill(0).map(() => ({ name: '', email: '' })) // <-- FIXED
        }); // <-- Reset form fields here
      } catch (error) {
        setErrorMsg('Registration failed. Please try again.');
      }
    }
    setLoading(false);
  };

  const isFormValid = () => {
    return Object.values(errors).every(error => !error) &&
      formData.terms &&
      formData.teamName &&
      formData.leaderName &&
      formData.leaderEmail &&
      formData.contactNumber &&
      formData.department &&
      formData.description;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 overflow-x-hidden mt-10" id='registration-form'>
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#1cb683] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#1cb683] opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1cb683] to-[#4dffd1]">
            IdeaJam <span className="text-white">2.0</span> Registration
          </h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Register your team for the most exciting hackathon of the year! 
            <br />Showcase your innovative ideas and compete for amazing prizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700 shadow-xl"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-[#1cb683]">Team Registration Form</h2>
              <p className="text-gray-400">Fill in all required details to secure your spot</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
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
                    <MenuItem value="The Uniques" className='font-[Outfit]'>The Uniques</MenuItem>
                    <MenuItem value="Super 60" className='font-[Outfit]'>Super 60</MenuItem>
                    <MenuItem value="BBA" className='font-[Outfit]'>BBA</MenuItem>
                    <MenuItem value="MBA" className='font-[Outfit]'>MBA</MenuItem>
                    <MenuItem value="ME" className='font-[Outfit]'>Mechanical Engineering (ME)</MenuItem>
                    <MenuItem value="ECE" className='font-[Outfit]'>Electronics (ECE)</MenuItem>
                    <MenuItem value="CE" className='font-[Outfit]'>Civil Engineering (CE)</MenuItem>
                    <MenuItem value="BCA" className='font-[Outfit]'>BCA</MenuItem>
                    <MenuItem value="Pharmacy" className='font-[Outfit]'>Pharmacy</MenuItem>
                    <MenuItem value="Paramedical" className='font-[Outfit]'>Paramedical</MenuItem>
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

                {/* Team Size is always 6, so this block is removed */}
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
                      <Typography variant="subtitle2" className="text-[#1cb683] font-[Outfit]">
                        Team Member {index + 2} {/* Start from 2 since leader is 1 */}
                      </Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextField
                        fullWidth
                        label={`Member ${index + 2} Name`}
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
                        label={`Member ${index + 2} Email`}
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

              {/* Remove Add Member button as team size is fixed to 6 */}

              <TextField
                fullWidth
                variant="outlined"
                label="Brief Idea Description (Max 200 chars)"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description || ' '}
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

              <div className="space-y-2">
                <Typography variant="body2" className="text-gray-300 flex items-center font-[Outfit]" sx={{fontFamily: "Outfit"}}>
                  <FiInfo className="mr-2 text-[#1cb683]" />Upload your presentation to Google Drive/Dropbox and share the link
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="PPT/PDF Link"
                  name="pptLink"
                  value={formData.pptLink}
                  onChange={handleChange}
                  error={!!errors.pptLink}
                  helperText={errors.pptLink || ' '}
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
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!isFormValid()}
                      startIcon={<SaveIcon />}
                      sx={{
                        width: '100%',
                        py: 1,
                        fontFamily: 'Outfit, sans-serif',
                        bgcolor: '#1cb683',
                        '&:hover': { bgcolor: '#16a076' },
                        fontSize: '1rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {loading ? 'Registering...' : 'Register'}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Information Section */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="space-y-6"
>
  <GlassCard className="p-6 border border-[#1cb683]/30">
    <div className="flex items-center gap-3 mb-4">
      <FiInfo className="w-6 h-6 text-[#1cb683]" />
      <h3 className="text-xl font-bold">Rules & Regulations (SIH Guidelines)</h3>
    </div>
    <ul className="space-y-3 text-gray-300">
      <li className="flex items-start gap-2">
        <FiClock className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>All submissions must strictly follow Smart India Hackathon (SIH) guidelines.</span>
      </li>
      <li className="flex items-start gap-2">
        <FiCalendar className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>Ideas must align with officially released SIH problem statements.</span>
      </li>
      <li className="flex items-start gap-2">
        <FiUsers className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>Team Size: 1-6 members (all from the same institution).</span>
      </li>
      <li className="flex items-start gap-2">
        <FiAward className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>Originality is mandatory — plagiarism will lead to disqualification.</span>
      </li>
      <li className="flex items-start gap-2">
        <FiShield className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>Top winners may be nominated to represent in Smart India Hackathon.</span>
      </li>
    </ul>
  </GlassCard>

  <GlassCard className="p-6 border border-[#1cb683]/30">
    <div className="flex items-center gap-3 mb-4">
      <FiBriefcase className="w-6 h-6 text-[#1cb683]" />
      <h3 className="text-xl font-bold">What You Need</h3>
    </div>
    <ul className="space-y-3 text-gray-300">
      <li className="flex items-start gap-2">
        <FiUser className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>Details of all team members including institution name.</span>
      </li>
      <li className="flex items-start gap-2">
        <FiLink className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>Link to your SIH-aligned idea presentation (PPT/PDF).</span>
      </li>
      <li className="flex items-start gap-2">
        <FiUpload className="mt-1 text-[#1cb683] flex-shrink-0" />
        <span>Optional: Demo video link (max 5 minutes, prototype demonstration).</span>
      </li>
    </ul>
  </GlassCard>

  <GlassCard className="p-6 border border-[#1cb683]/30">
    <div className="flex items-center gap-3 mb-4">
      <FiDollarSign className="w-6 h-6 text-[#1cb683]" />
      <h3 className="text-xl font-bold">Participation Benefits</h3>
    </div>
    <ul className="space-y-3 text-gray-300">
      <li>Networking with industry professionals and mentors</li>
      <li>Guidance from SIH experts for idea refinement</li>
      <li>Chance to win cash prizes worth ₹25,000</li>
      <li>Certificate of participation for all attendees</li>
      <li>Opportunity to represent your institution at SIH</li>
    </ul>
  </GlassCard>
</motion.div>

        </div>
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
          Registration Successful!.
        </Alert>
      </Snackbar>

      {/* Error notification */}
      <Snackbar
        open={!!errorMsg}
        autoHideDuration={6000}
        onClose={() => setErrorMsg('')}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setErrorMsg('')}
          severity="error"
          sx={{
            width: '100%',
            backgroundColor: '#e53935',
            color: 'white',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          {errorMsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default IdeaJamRegistration;